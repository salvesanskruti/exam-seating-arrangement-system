document.addEventListener("DOMContentLoaded", function () {
    
    const allSections = document.querySelectorAll("section");
    const sectionTitle = document.getElementById("section-title");

    function activateSection(sectionId) {
        allSections.forEach(section => section.classList.remove("active-section"));
        allSections.forEach(section => section.style.display = "none");

        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add("active-section");
            target.style.display = "block";
        }

        if (sectionTitle) {
            sectionTitle.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace('-', ' ');
        }

        // Highlight correct sidebar item if exists
        document.querySelectorAll(".sidebar-menu li").forEach(li => li.classList.remove("active"));
        const activeLink = document.querySelector(`.sidebar-menu a[data-section="${sectionId}"]`);
        if (activeLink && activeLink.parentElement) {
            activeLink.parentElement.classList.add("active");
        }
    }

    document.querySelectorAll("[data-section]").forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            activateSection(sectionId);
        });
    });

    // Default active section
    activateSection("dashboard");
});
    
    // Your code goes here
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
  
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    const sections = document.querySelectorAll('section');
  
    menuItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active-section'));
  
        item.classList.add('active');
        sections[index].classList.add('active-section');
  
        const title = item.textContent.trim();
        document.getElementById('section-title').textContent = title;
      });
    });



