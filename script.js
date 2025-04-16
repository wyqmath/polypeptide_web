document.addEventListener('DOMContentLoaded', function() {
    // 结构描述数据
    const structureDescriptions = {
        '4dri.pdb': {
            title: '人类胰岛素 (4DRI)',
            description: '胰岛素是一种由胰腺分泌的多肽激素，对调节血糖水平至关重要。该结构以1.9埃分辨率显示了人类胰岛素的三维结构。'
        },
        '8GRX.pdb': {
            title: '结构蛋白 (8GRX)',
            description: '这是8GRX结构，以2.3埃的分辨率显示了其分子特征和关键功能区域。'
        },
        'AF-A0A0G2JPG2-F1-model_v4.pdb': {
            title: 'AlphaFold预测结构 (AF-A0A0G2JPG2)',
            description: '这是由AlphaFold深度学习模型预测的蛋白质三维结构，展示了计算生物学在蛋白质结构预测领域的最新进展。'
        }
    };
    
    // 创建预览查看器
    const previewViewer1 = new PDBeMolstarPlugin();
    const previewViewer2 = new PDBeMolstarPlugin();
    const previewViewer3 = new PDBeMolstarPlugin();
    
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

    const previewOptions1 = { ...previewOptionsBase, customData: { url: '4dri.pdb', format: 'pdb' } };
    const previewOptions2 = { ...previewOptionsBase, customData: { url: '8GRX.pdb', format: 'pdb' } };
    const previewOptions3 = { ...previewOptionsBase, customData: { url: 'AF-A0A0G2JPG2-F1-model_v4.pdb', format: 'pdb' } };
    
    // 渲染预览查看器
    previewViewer1.render(document.getElementById('previewViewer1'), previewOptions1);
    previewViewer2.render(document.getElementById('previewViewer2'), previewOptions2);
    previewViewer3.render(document.getElementById('previewViewer3'), previewOptions3);
    
    // 使用 requestAnimationFrame 确保在下一帧绘制前实例化和渲染主查看器
    requestAnimationFrame(() => {
        // 将实例化移到这里
        const viewerInstance = new PDBeMolstarPlugin(); 
        const viewerContainer = document.getElementById('myViewer');

        // 主查看器配置选项 (初始加载)
        const mainViewerOptions = {
            customData: { url: '4dri.pdb', format: 'pdb' },
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
    // 从传入的参数获取描述，而不是全局变量
    const info = descriptions[pdbFile]; 
    
    infoDiv.innerHTML = `
        <h3>${info.title}</h3>
        <p>${info.description}</p>
    `;
} 