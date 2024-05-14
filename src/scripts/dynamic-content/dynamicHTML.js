import { deleteTask } from "../task/deleteTask.js";
import displayDetails from "../task/detail-modal/displayDetails.js";

// This file stores HTML elements that are created dynamically with JavaScript

// Create task card
function createTaskElement(value, id, timestamp) {
    const list = document.querySelector('.list');
    const newElement = document.createElement('li');
    newElement.classList.add('task-container', 'bg-green', 'animate__animated', 'animate__fadeIn');
  
    newElement.innerHTML = `<p
      class="task-title"
      contenteditable="plaintext-only"
      data-id="${id}"
      data-timestamp="${timestamp}"
      >${value}</p>
      <button
      data-id="${id}"
      role="checkbox"
      aria-checked="false"
      tabindex="0" 
      class="check-bttn"
      ></button>`;

    list.insertAdjacentElement('beforeend', newElement);
    displayDetails();
    deleteTask();  
};
  
  // Animate delete button for tasks
function animateDeleteBttn(checkBttn) {
  const svgCheckMark = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; right:25px;" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>'
  
  checkBttn.style.backgroundColor="#F3F3F3";
  checkBttn.insertAdjacentHTML("afterend", svgCheckMark);
  const parentElement = checkBttn.closest('.task-container');

  const taskContent = checkBttn.previousElementSibling;
  taskContent.style.textDecoration = 'line-through';

  parentElement.style.backgroundColor ='#92929280';
  parentElement.classList.add('animate__animated', 'animate__fadeOut')
  setTimeout(() => {
    parentElement.remove();
  }, 1000);
};

function createDetailModal(id, value) {
  if (!value) {
    value = '';
  }

  const modal = `
  <aside 
    class="
      detail-modal-container
      flex
      flex-col
      justify-between
      rounded-xl
      bg-light
      shadow-md
      w-[88%]
      h-[93%]
      md:w-[95%]
      absolute
      z-50
      m-6
      dark:bg-black
      dark:text-white
      animate__animated
      invisible
    "
    data-id="${id}-details"
>
  <header 
    class="
      detail-modal-header 
      flex
      h-16
      w-full
      justify-between
      items-center
      border-b-[1px]
      border-[#DCD6E0]
      dark:border-[#565559]
    "
  >
    <p
      class="
        detail-modal-title
        text-[24px]
        truncate
        m-6
      "
    ></p>
    <button class="detail-modal-close-bttn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="m-6 feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </header>
  <section 
    class="
      detail-modal-text-container
      flex
      flex-col
      justify-center
      h-[85%]
      overflow-clip
      "
  >
    <textarea 
      class="
        detail-modal-text
        h-[94%]
        lg:pt-2
        mx-6
        bg-light
        placeholder:p-1
        outline-none
        resize-none
        dark:bg-black
        dark:placeholder:text-white
      "
      placeholder="Compartilhe mais sobre a tarefa aqui..."
      name="details-text-area"
      autocomplete="off"
    >${value}</textarea>
    <div 
      class="
        timestamps-container
        flex
        justify-between
        mx-6
        mt-2
        sm:mt-4
        lg:mt-6
        text-[#49454F]
        dark:text-white
        "
    >
      <span
        class="
          created-timestamp
          text-[10px]
          "
      ></span>
      <span
        class="
          update-timestamp
          text-[10px]
          "
      ></span>
    </div>
  </section>
  <footer 
    class="
      bttn-actions 
      flex
      justify-between
      items-center
      w-full
      h-16
      rounded-b-lg 
      border-t-[1px]
      border-[#DCD6E0]
      dark:border-[#565559]
      "
  >
    <button class="bookmark-collection">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="m-6 feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
    </button>
    <button class="reminder">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="m-6 feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    </button>
  </footer>
</aside>`;

return modal;
}

export {
  createTaskElement,
  animateDeleteBttn,
  createDetailModal
};