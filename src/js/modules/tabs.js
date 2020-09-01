const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

        function hideContent() {
            content.forEach(item => { 
                item.style.display = 'none'
            });

            tabs.forEach(item => { 
                item.classList.remove(activeClass)
            });
        }

        function showContent(i = 0) {
            content[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }

        hideContent();
        showContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, '')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tabs.forEach((tab, index) => {
                    if (target == tab || target.parentNode == tab) {
                        hideContent();
                        showContent(index);
                    }
                });
            }
        });
};

export default tabs;