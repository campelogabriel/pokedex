const allTabs = document.querySelectorAll(".table");
const allContents = document.querySelectorAll(".content");

allTabs.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    const targetTab = e.target;

    if (targetTab.classList.contains("table-active")) return;

    document.querySelector(".table-active").classList.remove("table-active");
    targetTab.classList.add("table-active");

    //Adicionando hidden nas outras e removendo hidden da tab selecionada
    allContents.forEach((content) => {
      if (!content.classList.contains("hidden")) {
        content.classList.add("hidden");
      }
    });

    const tabId = targetTab.getAttribute("tabID");
    const contentTarget = document.querySelector(`[contentID = '${tabId}']`);
    contentTarget.classList.remove("hidden");
  })
);
