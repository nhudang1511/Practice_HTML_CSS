const projects = [
    {
      id: 1,
      title: "exercise 5",
      img: "./project_images/exercise5.png",
      href: "./exercise5.html",
    },
    {
      id: 2,
      title: "exercise 6",
      img: "./project_images/exercise6.png",
      href: "./exercise6.html",
    },
    {
        id: 3,
        title: "exercise 7",
        img: "./project_images/exercise7.png",
        href: "./exercise7.html",
      },
    {
      id: 4,
      title: "exercise 8",
      img: "./project_images/exercise8.png",
      href: "./exercise8.html",
    },
    {
        id: 5,
        title: "exercise 9",
        img: "./project_images/exercise9.png",
        href: "./exercise9.html",
    },
    {
        id: 6,
        title: "exercise 11",
        img: "./project_images/exercise11.png",
        href: "./exercise11.html",
      },
      {
        id: 7,
        title: "exercise 12",
        img: "./project_images/exercise12.png",
        href: "./exercise12.html",
      },
      {
          id: 8,
          title: "exercise 14",
          img: "./project_images/exercise14.png",
          href: "./exercise14.html",
        },
      {
        id: 9,
        title: "exercise 15",
        img: "./project_images/exercise15.png",
        href: "./exercise15.html",
      },
      {
          id: 10,
          title: "exercise 16",
          img: "./project_images/exercise16.png",
          href: "./exercise16.html",
      },
];

const section_center = document.querySelector(".section-center");

const project_filter = projects.map(function(project){
    return `<article class="project-item">
    <a href= ${project.href} target="_blank">
        <img class="project-img" src= ${project.img} alt="project_image" >
        <p class="project-name"> ${project.title}</p>
    </a>
  </article>`;
}).join("");

section_center.innerHTML = project_filter;