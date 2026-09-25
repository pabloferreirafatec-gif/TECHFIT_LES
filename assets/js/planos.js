const planButtons = document.querySelectorAll(".plan-type");

const planTitle = document.querySelector("#plan-title");
const planDescription = document.querySelector("#plan-description");
const planDuration = document.querySelector("#plan-duration");
const planFrequency = document.querySelector("#plan-frequency");
const planLevel = document.querySelector("#plan-level");
const weeksList = document.querySelector("#weeks-list");


const plans = {

    emagrecimento: {
        title: "Plano de Emagrecimento",

        description:
            "Treinos de 3 a 4 dias por semana, com foco em queima de gordura e condicionamento físico.",

        duration: "4 semanas",
        frequency: "3 a 4x por semana",
        level: "Iniciante",

        weeks: [
            {
                title: "Semana 1",
                description: "Adaptação e condicionamento",
                workouts: "3 treinos"
            },
            {
                title: "Semana 2",
                description: "Aumento da intensidade",
                workouts: "3 treinos"
            },
            {
                title: "Semana 3",
                description: "Força e resistência",
                workouts: "4 treinos"
            },
            {
                title: "Semana 4",
                description: "Resultado e manutenção",
                workouts: "4 treinos"
            }
        ]
    },


    massa: {
        title: "Plano de Ganho de Massa",

        description:
            "Treinos focados no desenvolvimento muscular, força e evolução progressiva.",

        duration: "6 semanas",
        frequency: "4x por semana",
        level: "Intermediário",

        weeks: [
            {
                title: "Semana 1",
                description: "Adaptação aos exercícios",
                workouts: "4 treinos"
            },
            {
                title: "Semana 2",
                description: "Aumento de carga",
                workouts: "4 treinos"
            },
            {
                title: "Semana 3",
                description: "Hipertrofia e força",
                workouts: "4 treinos"
            },
            {
                title: "Semana 4",
                description: "Progressão de carga",
                workouts: "4 treinos"
            },
            {
                title: "Semana 5",
                description: "Maior intensidade",
                workouts: "4 treinos"
            },
            {
                title: "Semana 6",
                description: "Consolidação dos resultados",
                workouts: "4 treinos"
            }
        ]
    },


    disposicao: {
        title: "Plano Mais Disposição",

        description:
            "Treinos leves e dinâmicos para melhorar o condicionamento e aumentar sua disposição no dia a dia.",

        duration: "4 semanas",
        frequency: "3x por semana",
        level: "Iniciante",

        weeks: [
            {
                title: "Semana 1",
                description: "Movimento e adaptação",
                workouts: "3 treinos"
            },
            {
                title: "Semana 2",
                description: "Condicionamento físico",
                workouts: "3 treinos"
            },
            {
                title: "Semana 3",
                description: "Resistência e mobilidade",
                workouts: "3 treinos"
            },
            {
                title: "Semana 4",
                description: "Energia e evolução",
                workouts: "3 treinos"
            }
        ]
    },


    saude: {
        title: "Plano Saúde Geral",

        description:
            "Treinos equilibrados para melhorar mobilidade, resistência, força e qualidade de vida.",

        duration: "4 semanas",
        frequency: "3x por semana",
        level: "Iniciante",

        weeks: [
            {
                title: "Semana 1",
                description: "Adaptação e mobilidade",
                workouts: "3 treinos"
            },
            {
                title: "Semana 2",
                description: "Força e equilíbrio",
                workouts: "3 treinos"
            },
            {
                title: "Semana 3",
                description: "Resistência física",
                workouts: "3 treinos"
            },
            {
                title: "Semana 4",
                description: "Manutenção e bem-estar",
                workouts: "3 treinos"
            }
        ]
    }
};


function changePlan(planName) {

    const plan = plans[planName];

    planTitle.textContent = plan.title;
    planDescription.textContent = plan.description;
    planDuration.textContent = plan.duration;
    planFrequency.textContent = plan.frequency;
    planLevel.textContent = plan.level;

    // Limpa as semanas do plano anterior
    weeksList.innerHTML = "";

    // Cria as semanas do plano selecionado
    plan.weeks.forEach(function(week, index) {

        const weekCard = document.createElement("a");

        weekCard.href =
            "semana.html?plano=" +
            planName +
            "&semana=" +
            (index + 1);

        weekCard.classList.add("week-card");

        weekCard.innerHTML = `
            <section class="week-icon">
                <img
                    src="../assets/img/icon_calendar.png"
                    alt="Calendário">
            </section>

            <section class="week-description">

                <h3>
                    ${week.title}
                </h3>

                <p>
                    ${week.description}
                </p>

            </section>

            <section class="week-training">
                ${week.workouts}
            </section>

            <section class="week-arrow">
                ›
            </section>
        `;

        weeksList.appendChild(weekCard);
    });
}

planButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        planButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const selectedPlan = button.dataset.plan;

        changePlan(selectedPlan);
    });

});