document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('project-form');
    const projectNameInput = document.getElementById('project-name');
    const projectDescriptionInput = document.getElementById('project-description');
    const columns = document.querySelectorAll('.column');

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = projectNameInput.value;
        const projectDescription = projectDescriptionInput.value;
        addProject('todo', projectName, projectDescription);
        projectForm.reset();
    });

    function addProject(columnId, name, description) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.draggable = true;
        project.innerHTML = `<strong>${name}</strong><p>${description}</p>`;
        project.addEventListener('dragstart', handleDragStart);
        project.addEventListener('dragover', handleDragOver);
        project.addEventListener('drop', handleDrop);
        document.getElementById(columnId).appendChild(project);
    }

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.innerHTML);
        e.dataTransfer.effectAllowed = 'move';
        e.target.classList.add('dragging');
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedElement = document.querySelector('.dragging');
        draggedElement.classList.remove('dragging');
        e.target.closest('.column').appendChild(draggedElement);
    }

    columns.forEach(column => {
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('drop', handleDrop);
    });
});