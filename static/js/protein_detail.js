// JavaScript for protein_detail.html can be added here.
// For example, handling button clicks or making the info section collapsible.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Protein detail page loaded.');
    
    // Example: Add functionality to toggle the information section (optional)
    const infoHeader = document.querySelector('.info-section h2');
    const infoTable = document.querySelector('.info-section table');
    const toggleArrow = document.querySelector('.toggle-arrow');

    if (infoHeader && infoTable && toggleArrow) {
        infoHeader.addEventListener('click', () => {
            const isHidden = infoTable.style.display === 'none';
            infoTable.style.display = isHidden ? '' : 'none';
            toggleArrow.textContent = isHidden ? '▲' : '▼';
        });
    }

    // Add other event listeners or functions as needed.
}); 

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有 PDB 项目和预览项目
    const pdbItems = document.querySelectorAll('.pdb-item');
    const previewItems = document.querySelectorAll('.preview-item');
    const structureInfoDiv = document.getElementById('structureInfo');

    // 动态生成结构描述对象
    const structureDescriptions = {};
    pdbItems.forEach(item => {
        const pdbPath = item.getAttribute('data-pdb');
        const title = item.children[1].textContent + ' (' + item.children[0].textContent + ')';
        // 尝试从现有的 structureInfoDiv 获取初始描述（可能需要调整）
        // 注意：这里简单处理，可能需要更健壮的方式来获取或定义描述
        const initialDescription = structureInfoDiv.querySelector('p')?.textContent || '描述加载中...'; 
        if (pdbPath) { // 确保 pdbPath 有效
            structureDescriptions[pdbPath] = {
                title: title,
                description: initialDescription // 初始描述，后面会更新
            };
        }
    });
    // 如果初始描述是针对特定结构的，需要单独处理第一个描述的填充
    const activeItem = document.querySelector('.pdb-item.active');
    if (activeItem) {
        const activePdbPath = activeItem.getAttribute('data-pdb');
        const activeTitle = activeItem.children[1].textContent + ' (' + activeItem.children[0].textContent + ')';
        const activeDescription = structureInfoDiv.querySelector('p')?.textContent || '描述加载中...';
        if (activePdbPath && structureDescriptions[activePdbPath]) {
             structureDescriptions[activePdbPath] = { title: activeTitle, description: activeDescription };
        }
    }


    // 创建预览查看器实例
    const previewViewers = {}; // 使用对象存储预览查看器实例

    // 预览查看器配置选项
    const previewOptionsBase = {
        hideControls: true,
        expanded: false,
        hideCanvasControls: ['expand', 'controlToggle', 'controlInfo', 'selection', 'animation'],
        selectInteraction: false,
        bgColor: {r:255, g:255, b:255},
        layoutShowMode: 'hidden',
        layoutShowRemoteState: 'none',
        lowerResolutionLimit: 1,
        highestQuality: true,
        preferWebgl1: false,
        sequencePanel: false,
        viewportStyle: {
            aspectRatio: 4/3,
            maintainAspectRatio: true
        }
    };

    // 恢复并行渲染预览，每个渲染使用 rAF
    previewItems.forEach((item, index) => {
        const viewerId = `previewViewer${index + 1}`;
        const targetElement = document.getElementById(viewerId);
        const pdbPath = item.getAttribute('data-pdb');

        if (targetElement && pdbPath) {
            previewViewers[viewerId] = new PDBeMolstarPlugin(); // 初始化实例
            const previewOptions = {
                ...previewOptionsBase,
                customData: { url: pdbPath, format: 'pdb' }
            };
            // 使用 rAF 来安排渲染
            requestAnimationFrame(() => {
                previewViewers[viewerId].render(targetElement, previewOptions);
            });
        } else {
            console.error(`无法渲染预览: 元素 #${viewerId} 或 data-pdb 属性缺失。`);
        }
    });

    // 使用 requestAnimationFrame 确保在下一帧绘制前实例化和渲染主查看器
    requestAnimationFrame(() => {
        // 将实例化移到这里
        const viewerInstance = new PDBeMolstarPlugin(); 
        const viewerContainer = document.getElementById('myViewer');

        // 获取初始加载的 PDB 路径（从激活的列表项）
        const initialPdbItem = document.querySelector('.pdb-item.active');
        const initialPdbPath = initialPdbItem ? initialPdbItem.getAttribute('data-pdb') : null; // 获取激活项的路径

        if (!initialPdbPath) {
            console.error("无法找到初始激活的 PDB 项 (.pdb-item.active) 或其 data-pdb 属性。");
            // 可以设置一个默认路径或显示错误信息
            return; 
        }

        // 主查看器配置选项 (使用动态获取的初始路径)
        const mainViewerOptions = {
            customData: { url: initialPdbPath, format: 'pdb' }, // 使用动态路径
            expanded: false,
            hideCanvasControls: ['selection', 'animation', 'controlToggle', 'controlInfo'],
            landscape: true,
            reactive: false,
            bgColor: {r:255, g:255, b:255},
            sequencePanel: true,
            highestQuality: true,
            preferWebgl1: false,
            viewportStyle: {
                aspectRatio: 4/3,
                maintainAspectRatio: true
            }
        };

        viewerInstance.render(viewerContainer, mainViewerOptions);

        // 更新初始描述信息
        updateDescription(initialPdbPath, structureDescriptions);

        // 将事件监听器的设置也移到 requestAnimationFrame 内部
        setupEventListeners(viewerInstance, viewerContainer, structureDescriptions);
        
        // 添加窗口大小变化事件监听器
        window.addEventListener('resize', function() {
            // 重新适应查看器大小
            viewerInstance.visual.update();
        });
    });
});

// 将事件监听器逻辑封装成函数
function setupEventListeners(viewerInstance, viewerContainer, structureDescriptions) {
    const pdbItems = document.querySelectorAll('.pdb-item');
    pdbItems.forEach(item => {
        item.addEventListener('click', function() {
            pdbItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const pdbFile = this.getAttribute('data-pdb');
            // 更新主查看器 - 恢复使用 clear 和 render
            viewerInstance.clear();
            viewerInstance.render(viewerContainer, {
                customData: { url: pdbFile, format: 'pdb'},
                expanded: false, 
                hideCanvasControls: ['selection', 'animation', 'controlToggle', 'controlInfo'],
                landscape: true,
                reactive: false,
                bgColor: {r:255, g:255, b:255},
                sequencePanel: true,
                highestQuality: true,
                preferWebgl1: false,
                viewportStyle: {
                    aspectRatio: 4/3,
                    maintainAspectRatio: true
                }
            });
            updateDescription(pdbFile, structureDescriptions);
        });
    });

    const previewItems = document.querySelectorAll('.preview-item');
    previewItems.forEach(item => {
        item.addEventListener('click', function() {
            const pdbFile = this.getAttribute('data-pdb');
            pdbItems.forEach(i => {
                if (i.getAttribute('data-pdb') === pdbFile) {
                    i.classList.add('active');
                } else {
                    i.classList.remove('active');
                }
            });
             // 更新主查看器 - 恢复使用 clear 和 render
            viewerInstance.clear();
            viewerInstance.render(viewerContainer, {
                customData: { url: pdbFile, format: 'pdb'},
                expanded: false, 
                hideCanvasControls: ['selection', 'animation', 'controlToggle', 'controlInfo'],
                landscape: true,
                reactive: false,
                bgColor: {r:255, g:255, b:255},
                sequencePanel: true,
                highestQuality: true,
                preferWebgl1: false,
                viewportStyle: {
                    aspectRatio: 4/3,
                    maintainAspectRatio: true
                }
            });
            updateDescription(pdbFile, structureDescriptions);
            document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// 更新描述信息 (现在需要接收 structureDescriptions)
function updateDescription(pdbFile, descriptions) {
    const infoDiv = document.getElementById('structureInfo');
    // 从传入的参数获取描述
    const info = descriptions[pdbFile];

    if (info) { // 检查 info 是否存在
        infoDiv.innerHTML = `
            <h3>${info.title}</h3>
            <p>${info.description}</p>
        `;
    } else {
        // 如果找不到描述，显示默认信息或错误
        infoDiv.innerHTML = `
            <h3>信息加载失败</h3>
            <p>未找到 PDB 文件 "${pdbFile}" 的描述信息。</p>
        `;
        console.error(`未在 structureDescriptions 中找到 key: ${pdbFile}`);
    }
} 