let newId = 222;

function id() {
    return newId++;
}
// сюда можно добаить больше инфы
const list_Our_Courses = [{
        page : 'HTMLcss.html',
        id: id(),
        title: "HTML и CSS для JavaScript разработчиков",
        text: "Планируете изучать JavaScript? Вам необходимо знание HTML и CSS, поскольку большая часть технологий JavaScript это манипуляции со страницей! Курс изучает современную верстку и позволяет быстро научится создавать сайты. В курсе рассмотрены все основные технологии HTML5 и CSS3",
        img: "./assest/img/course/Html_Css2.jpg",
        start: "5.01.2021",
        price: {
            uan_one: 3500,
            uan_max: 3500,
            rub_one: 2,
            rub_max: 4,
            $_one: 125,
            $_max: 125,
        },
        duration: {
            number_of_lessons: 10,
            hours: 30,
            months: 1,
            quanity_per_week: 3,
            duration_one_lesson : 2
        },
    },
    {
        page : 'FrontEnd.html',
        id: id(),
        title: "Front-End с нуля до первой работы",
        text: "Front-End —это дизайнер, верстальщик и программист в одном лице.  В наше время, пожалуй, быстрее всего развивающаяся область программирования.  С другой стороны, эти технологии достаточно устоявшиеся и распространены практически повсеместно, ведь браузер есть во многих электронных устройствах.",
        img: "./assest/img/course/front_end.jpg",
        start: "5.12.2020",
        price: {
            uan_one: 3400,
            uan_max: 12000,
            uan_discount :19500,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 425,

        },
        duration: {
            number_of_lessons: 30,
            hours: 75,
            months: 3.5,
            quanity_per_week:3,
            duration_one_lesson : 2
        },
    },
    {
        page : 'Js.html',
        id: id(),
        title: "JavaScript для Front-end",
        text: "Начните писать программы на JavaScript. Курс рассчитан на тех, кто начинает с нуля. Шаблоны и подобранные задачи по нарастанию сложности помогут вам создавать корректный код. В курсе представлены все темы, необходимые для соискания уровня junior разработчика",
        img: "./assest/img/course/js3.jpg",
        start: "5.01.2021",
        price: {
            uan_one: 5400,
            uan_max: 5400,
            uan_discount :8200,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 285,
        },
        duration: {
            number_of_lessons: 12,
            hours: 24,
            months: 1,
            quanity_per_week: 2,
            duration_one_lesson : 2
        },
    },
    // //!
    // {
    //     page : 'JsAdvanse.html',
    //     id: id(),
    //     title: "JavaScript для Front-end Advansed",
    //     text: "Начните писать программы на JavaScript. Курс рассчитан на тех, кто начинает с нуля. Шаблоны и подобранные задачи по нарастанию сложности помогут вам создавать корректный код. В курсе представлены все темы, необходимые для соискания уровня junior разработчика",
    //     img: "./assest/img/course/js3.jpg",
    //     start: "5.01.2021",
    //     price: {
    //         uan_one: 7600,
    //         uan_max: 7600,
    //         uan_discount :11100,
    //         rub_one: 2,
    //         rub_max: 4,
    //         $_one: 2,
    //         $_max: 285,
    //     },
    //     duration: {
    //         number_of_lessons: 19,
    //         hours: 38,
    //         months: 2,
    //         quanity_per_week: 3,
    //         duration_one_lesson : 2
    //     },
    // },
    // //?
    {
        page : 'ReactRedux.html',
        id: id(),
        title: "React + Redux",
        text: "Учим самый популярный фреймворк JavaScript – React. Курс подходит для тех, кто хочет освоить фреймворк React и делать приложения любого уровня сложности совместно с движком Redux который позволяет писать бизнес логику",
        img: "./assest/img/course/RR.jpg",
        start: "5.02.2021",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 355,
        },
        duration: {
            number_of_lessons: 15,
            hours: 45,
            months: 2,
            quanity_per_week: 2,
        },
    },
    {
        page : 'Python.html',   
        id: id(),
        title: "Python",
        text: "Python входит в топ-10 самых востребованных языков программирования. Он открывает путь в топовые IT-компании: Google, Pixar, Youtube, Instagram, Nasa, Intel, Pinterest используют именно его. После курса вы сможете устроиться в компанию, где создают интерактивные веб-сервисы на Python, а таких очень много: 3305 вакансий для python-разработчика открыто прямо сейчас",
        img: "./assest/img/course/python-logo.jpg.jfif",
        start: "Уже нет мест",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 500,
        },
        duration: {
            number_of_lessons: 16,
            hours: 50,
            months: 2,
            quanity_per_week: 2,
        },
    },
    {
        page : 'Java.html',  
        id: id(),
        title: "Java",
        text: "Этот популярный язык имеет множество сфер применения: от создания динамических элементов на сайтах до организации сбора информации о пользователях интернет-магазинов. Программист Java также занимается улучшением дизайна и функциональности сайтов, тестированием работы приложений.",
        img: "./assest/img/course/java-logo.jpg",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 500,
        },
        duration: {
            number_of_lessons: 16,
            hours: 50,
            months: 2,
            quanity_per_week: 2,
        },
    },
    // {
    //     id: id(),
    //     title: "C#",
    //     text: "Курс предназначен для тех, кто только начинает свой путь в IT-индустрии и не имеет представления о основах программирования и В какой специальности развиваться. В течение двух месяцев вы узнаете как устроенной компьютер, как писать на языке C # (.Net), которые являются переменные, типы данных и многое другое.",
    //     img: "./assest/img/course/C-logo.png",
    //     start: "В скором времени",
    //     price: {
    //         uan_one: 3500,
    //         uan_max: 12000,
    //         rub_one: 2,
    //         rub_max: 4,
    //         $_one: 2,
    //         $_max: 500,
    //     },
    //     duration: {
    //         number_of_lessons: 16,
    //         hours: 50,
    //         months: 2,
    //         quanity_per_week: 2,
    //     },
    // },
    {
        page : 'NodeJS.html', 
        id: id(),
        title: "NodeJS (Back-end)",
        text: "Node.js представляет среду выполнения кода на JavaScript, которая построена на основе движка JavaScript Chrome V8, который позволяет транслировать вызовы на языке JavaScript в машинный код. Node.js прежде всего предназначен для создания серверных приложений на языке JavaScript. Хотя также существуют проекты по написанию кода для микроконтроллеров.",
        img: "./assest/img/course/Node2.jpg",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 635,
        },
        duration: {
            number_of_lessons: 30,
            hours: 90,
            months: 4,
            quanity_per_week: 1,
        },
    },
    //////////////!
    {
        page : 'Redux.html', 
        id: id(),
        title: "Redux технологии",
        text: "Redux — это официальный способ управлять состоянием в нетривиальных React приложениях. Несмотря на свою простоту и элегантность, он требует время на вникание. Кроме того, вокруг Redux огромная экосистема библиотек, автоматизирующих разные задачи. Этот курс посвящен в том числе самым популярным библиотекам.",
        img: "./assest/img/course/redux.png",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 635,
        },
        duration: {
            number_of_lessons: 30,
            hours: 90,
            months: 4,
            quanity_per_week: 1,
        },
    },
    {
        page : 'FullStack.html', 
        id: id(),
        title :'Full Stack Developer',
        text: " FullStack программист совмещает в себе знания Front-End и Backend. Такие специалисты пользуются большим спросом на рынке труда и даже на старте претендуют на высокие зарплаты.",
        img: "./assest/img/course/backEnd.png",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 635,
        },
        duration: {
            number_of_lessons: 30,
            hours: 90,
            months: 4,
            quanity_per_week: 1,
        },
    },
    {
        page : 'CSS.html', 
        id: id(),
        title: "Полный курс CSS", // до первой работы
        text: `Пока HTML определяет содержимое веб-страницы, CSS занимается её стилизацией. Это подразумевает настройку цвета, шрифтов, размеров, полей, положения элементов веб-страницы.
        HTML инертный. CSS изменчивый.
        CSS приносит на сайт жизнь путём нанесения слоя краски на статичное содержимое и повышает его назначение через цвет, пространство, акцент и движение.`,
        img: "./assest/img/course/cssClassic.jpeg",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 635,
        },
        duration: {
            number_of_lessons: 30,
            hours: 90,
            months: 4,
            quanity_per_week: 1,
        },
    },
    {
        page : 'React.html', 
        id: id(),
        title:'Уникальная React технология',
        text: "Учим самый популярный фреймворк JavaScript – React. Курс подходит для тех, кто хочет освоить фреймворк React и делать приложения любого уровня сложности.Последнее время знание React является обязательным для frontend разработчика и решающим при приеме на работу. ",
        img: "./assest/img/course/React.jpg",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 635,
        },
        duration: {
            number_of_lessons: 30,
            hours: 90,
            months: 4,
            quanity_per_week: 1,
        },
    },
    {
        page : 'CSSanimation.html', 
        id: id(),
        title: "Курс CSS анимации",
        text: "Рассмотрим основы анимации на CSS. Нам предстоит пройти путь развития цивилизации и покорить космический простор. Мы будем двигать, поворачивать и видоизменять объекты, попутно осваивая приёмы работы анимации в CSS.",
        img: "./assest/img/course/cssAnim.jpg",
        start: "В скором времени",
        price: {
            uan_one: 3500,
            uan_max: 12000,
            rub_one: 2,
            rub_max: 4,
            $_one: 2,
            $_max: 635,
        },
        duration: {
            number_of_lessons: 30,
            hours: 90,
            months: 4,
            quanity_per_week: 1,
        },
    },
];
