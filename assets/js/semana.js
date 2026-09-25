const parameters = new URLSearchParams(window.location.search);

const selectedPlan = parameters.get("plano") || "emagrecimento";
const selectedWeek = parameters.get("semana") || "1";

const weekIntroduction = document.querySelector("#week-introduction");
const weekPlan = document.querySelector("#week-plan");
const weekTitle = document.querySelector("#week-title");
const weekDescription = document.querySelector("#week-description");

const weekWorkouts = document.querySelector("#week-workouts");
const weekDuration = document.querySelector("#week-duration");
const weekLevel = document.querySelector("#week-level");

const trainingList = document.querySelector("#week-training-list");


const weeks = {

    emagrecimento: {

        name: "PLANO DE EMAGRECIMENTO",

        1: {

            title: "Semana 1",

            description:
                "Adaptação e condicionamento",

            introduction:
                "Nesta primeira semana, o foco é adaptar o corpo aos exercícios, desenvolver a técnica correta e criar o hábito da prática.",

            duration: "25 a 30 minutos",

            level: "Iniciante",

            trainings: [

                {
                    id: "A",
                    name: "Treino A - Corpo todo",
                    description:
                        "Exercícios básicos para ativar o corpo e melhorar a resistência inicial.",
                    duration: "25 minutos",
                    image: "../assets/img/agachamento.png"
                },

                {
                    id: "B",
                    name: "Treino B - Corpo todo",
                    description:
                        "Aumento da intensidade com foco em força e estabilidade.",
                    duration: "30 minutos",
                    image: "../assets/img/flexao.png"
                },

                {
                    id: "C",
                    name: "Treino C - Corpo todo",
                    description:
                        "Consolidação dos movimentos e melhora do condicionamento.",
                    duration: "25 minutos",
                    image: "../assets/img/prancha.png"
                }

            ]

        },


        2: {

            title: "Semana 2",

            description:
                "Aumento da intensidade",

            introduction:
                "Agora que seu corpo já está se adaptando, os exercícios começam a ganhar um pouco mais de intensidade.",

            duration: "30 minutos",

            level: "Iniciante",

            trainings: [

                {
                    id: "A",
                    name: "Treino A - Pernas e glúteos",
                    description:
                        "Exercícios para fortalecer pernas, glúteos e melhorar o equilíbrio.",
                    duration: "30 minutos",
                    image: "../assets/img/agachamento.png"
                },

                {
                    id: "B",
                    name: "Treino B - Superior e core",
                    description:
                        "Fortalecimento de peito, braços, abdômen e região central.",
                    duration: "30 minutos",
                    image: "../assets/img/flexao.png"
                },

                {
                    id: "C",
                    name: "Treino C - Corpo todo",
                    description:
                        "Combinação de exercícios para trabalhar diferentes grupos musculares.",
                    duration: "30 minutos",
                    image: "../assets/img/prancha.png"
                }

            ]

        },


        3: {

            title: "Semana 3",

            description:
                "Força e resistência",

            introduction:
                "Nesta semana, os treinos trabalham força e resistência para continuar aumentando seu condicionamento físico.",

            duration: "30 a 35 minutos",

            level: "Iniciante",

            trainings: [

                {
                    id: "A",
                    name: "Treino A - Pernas",
                    description:
                        "Treino focado no fortalecimento das pernas e glúteos.",
                    duration: "30 minutos",
                    image: "../assets/img/agachamento.png"
                },

                {
                    id: "B",
                    name: "Treino B - Superior",
                    description:
                        "Exercícios para peito, braços, ombros e abdômen.",
                    duration: "30 minutos",
                    image: "../assets/img/flexao.png"
                },

                {
                    id: "C",
                    name: "Treino C - Resistência",
                    description:
                        "Sequência de exercícios para melhorar seu condicionamento.",
                    duration: "35 minutos",
                    image: "../assets/img/prancha.png"
                },

                {
                    id: "D",
                    name: "Treino D - Corpo todo",
                    description:
                        "Treino completo para trabalhar todo o corpo.",
                    duration: "35 minutos",
                    image: "../assets/img/agachamento.png"
                }

            ]

        },


        4: {

            title: "Semana 4",

            description:
                "Resultado e manutenção",

            introduction:
                "A última semana consolida sua evolução e prepara você para continuar treinando de forma consistente.",

            duration: "30 a 35 minutos",

            level: "Iniciante",

            trainings: [

                {
                    id: "A",
                    name: "Treino A - Corpo todo",
                    description:
                        "Treino completo combinando força e condicionamento.",
                    duration: "35 minutos",
                    image: "../assets/img/agachamento.png"
                },

                {
                    id: "B",
                    name: "Treino B - Resistência",
                    description:
                        "Exercícios contínuos para melhorar sua resistência física.",
                    duration: "30 minutos",
                    image: "../assets/img/flexao.png"
                },

                {
                    id: "C",
                    name: "Treino C - Força",
                    description:
                        "Exercícios focados na evolução da força muscular.",
                    duration: "35 minutos",
                    image: "../assets/img/prancha.png"
                },

                {
                    id: "D",
                    name: "Treino D - Final",
                    description:
                        "Treino completo para encerrar seu primeiro ciclo.",
                    duration: "35 minutos",
                    image: "../assets/img/agachamento.png"
                }

            ]

        }

    },

    massa: {

    name: "PLANO DE GANHO DE MASSA",

    1: {
        title: "Semana 1",
        description: "Adaptação ao treino de força",
        introduction:
            "Nesta primeira semana, o objetivo é aprender os movimentos e preparar o corpo para a progressão dos treinos.",
        duration: "30 a 35 minutos",
        level: "Intermediário",

        trainings: [
            {
                id: "A",
                name: "Treino A - Peito e braços",
                description: "Treino focado no fortalecimento da parte superior do corpo.",
                duration: "35 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "B",
                name: "Treino B - Pernas",
                description: "Exercícios para desenvolver pernas e glúteos.",
                duration: "35 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Fortalecimento do abdômen e estabilidade corporal.",
                duration: "30 minutos",
                image: "../assets/img/prancha.png"
            },
            {
                id: "D",
                name: "Treino D - Corpo todo",
                description: "Treino geral envolvendo os principais grupos musculares.",
                duration: "35 minutos",
                image: "../assets/img/avanco.png"
            }
        ]
    },

    2: {
        title: "Semana 2",
        description: "Aumento de carga",
        introduction:
            "Nesta semana começamos a aumentar gradualmente a intensidade dos exercícios.",
        duration: "35 minutos",
        level: "Intermediário",

        trainings: [
            {
                id: "A",
                name: "Treino A - Peito e tríceps",
                description: "Fortalecimento do peito, ombros e tríceps.",
                duration: "35 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "B",
                name: "Treino B - Pernas e glúteos",
                description: "Maior intensidade para membros inferiores.",
                duration: "35 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Abdômen",
                description: "Treino para fortalecimento do core.",
                duration: "30 minutos",
                image: "../assets/img/abdominal.png"
            },
            {
                id: "D",
                name: "Treino D - Corpo todo",
                description: "Combinação dos principais movimentos da semana.",
                duration: "35 minutos",
                image: "../assets/img/avanco.png"
            }
        ]
    },

    3: {
        title: "Semana 3",
        description: "Hipertrofia e força",
        introduction:
            "Os exercícios ganham mais intensidade para estimular força e desenvolvimento muscular.",
        duration: "35 a 40 minutos",
        level: "Intermediário",

        trainings: [
            {
                id: "A",
                name: "Treino A - Superior",
                description: "Treino focado na parte superior do corpo.",
                duration: "40 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "B",
                name: "Treino B - Pernas",
                description: "Fortalecimento e resistência dos membros inferiores.",
                duration: "40 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Exercícios para abdômen e estabilidade.",
                duration: "35 minutos",
                image: "../assets/img/prancha.png"
            },
            {
                id: "D",
                name: "Treino D - Corpo todo",
                description: "Treino combinado de força e resistência.",
                duration: "40 minutos",
                image: "../assets/img/avanco.png"
            }
        ]
    },

    4: {
        title: "Semana 4",
        description: "Progressão de carga",
        introduction:
            "Continue evoluindo com exercícios mais intensos e progressão gradual.",
        duration: "40 minutos",
        level: "Intermediário",

        trainings: [
            {
                id: "A",
                name: "Treino A - Superior",
                description: "Progressão para peito, braços e ombros.",
                duration: "40 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "B",
                name: "Treino B - Inferior",
                description: "Progressão de força para pernas e glúteos.",
                duration: "40 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Fortalecimento avançado da região central.",
                duration: "35 minutos",
                image: "../assets/img/abdominal.png"
            },
            {
                id: "D",
                name: "Treino D - Completo",
                description: "Exercícios para todo o corpo.",
                duration: "40 minutos",
                image: "../assets/img/avanco.png"
            }
        ]
    },

    5: {
        title: "Semana 5",
        description: "Maior intensidade",
        introduction:
            "Nesta fase o corpo já está mais preparado para treinos mais exigentes.",
        duration: "40 minutos",
        level: "Intermediário",

        trainings: [
            {
                id: "A",
                name: "Treino A - Força superior",
                description: "Treino intenso para a parte superior.",
                duration: "40 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "B",
                name: "Treino B - Força inferior",
                description: "Treino intenso para pernas e glúteos.",
                duration: "40 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Abdômen",
                description: "Fortalecimento e resistência abdominal.",
                duration: "35 minutos",
                image: "../assets/img/prancha.png"
            },
            {
                id: "D",
                name: "Treino D - Corpo todo",
                description: "Treino completo com maior intensidade.",
                duration: "40 minutos",
                image: "../assets/img/avanco.png"
            }
        ]
    },

    6: {
        title: "Semana 6",
        description: "Consolidação dos resultados",
        introduction:
            "Última semana do ciclo, reunindo os exercícios e a evolução das semanas anteriores.",
        duration: "40 minutos",
        level: "Intermediário",

        trainings: [
            {
                id: "A",
                name: "Treino A - Superior",
                description: "Consolidação da força da parte superior.",
                duration: "40 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "B",
                name: "Treino B - Pernas",
                description: "Treino completo para membros inferiores.",
                duration: "40 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Treino completo para abdômen.",
                duration: "35 minutos",
                image: "../assets/img/abdominal.png"
            },
            {
                id: "D",
                name: "Treino D - Final",
                description: "Treino final envolvendo todo o corpo.",
                duration: "40 minutos",
                image: "../assets/img/avanco.png"
            }
        ]
    }
},

disposicao: {

    name: "PLANO MAIS DISPOSIÇÃO",

    1: {
        title: "Semana 1",
        description: "Movimento e adaptação",
        introduction:
            "Comece criando uma rotina de exercícios leves para movimentar o corpo e aumentar sua energia.",
        duration: "20 a 25 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Corpo todo",
                description: "Movimentos básicos para ativar o corpo.",
                duration: "20 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "B",
                name: "Treino B - Mobilidade",
                description: "Exercícios leves de mobilidade e resistência.",
                duration: "25 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Fortalecimento leve da região abdominal.",
                duration: "20 minutos",
                image: "../assets/img/prancha.png"
            }
        ]
    },

    2: {
        title: "Semana 2",
        description: "Condicionamento físico",
        introduction:
            "Nesta semana aumentamos gradualmente o ritmo para melhorar seu condicionamento.",
        duration: "25 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Pernas",
                description: "Fortalecimento e movimentação dos membros inferiores.",
                duration: "25 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "B",
                name: "Treino B - Corpo todo",
                description: "Movimentos combinados para aumentar a disposição.",
                duration: "25 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Treino abdominal e estabilidade.",
                duration: "20 minutos",
                image: "../assets/img/abdominal.png"
            }
        ]
    },

    3: {
        title: "Semana 3",
        description: "Resistência e mobilidade",
        introduction:
            "O objetivo agora é melhorar a resistência física e a mobilidade corporal.",
        duration: "25 a 30 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Resistência",
                description: "Exercícios para aumentar sua resistência.",
                duration: "30 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "B",
                name: "Treino B - Corpo todo",
                description: "Sequência completa para condicionamento.",
                duration: "30 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Estabilidade",
                description: "Fortalecimento de core e postura.",
                duration: "25 minutos",
                image: "../assets/img/prancha.png"
            }
        ]
    },

    4: {
        title: "Semana 4",
        description: "Energia e evolução",
        introduction:
            "Consolide sua rotina e perceba a melhora na disposição para as atividades diárias.",
        duration: "30 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Corpo todo",
                description: "Treino completo de condicionamento.",
                duration: "30 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "B",
                name: "Treino B - Resistência",
                description: "Treino focado em resistência física.",
                duration: "30 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "C",
                name: "Treino C - Final",
                description: "Treino final do ciclo de disposição.",
                duration: "30 minutos",
                image: "../assets/img/prancha.png"
            }
        ]
    }
},

saude: {

    name: "PLANO SAÚDE GERAL",

    1: {
        title: "Semana 1",
        description: "Adaptação e mobilidade",
        introduction:
            "O primeiro objetivo é movimentar o corpo com segurança e desenvolver mobilidade.",
        duration: "20 a 25 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Mobilidade",
                description: "Movimentos leves para melhorar mobilidade.",
                duration: "20 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "B",
                name: "Treino B - Corpo todo",
                description: "Exercícios básicos para todo o corpo.",
                duration: "25 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Fortalecimento básico da região abdominal.",
                duration: "20 minutos",
                image: "../assets/img/prancha.png"
            }
        ]
    },

    2: {
        title: "Semana 2",
        description: "Força e equilíbrio",
        introduction:
            "Nesta semana trabalhamos força básica e equilíbrio para melhorar os movimentos do dia a dia.",
        duration: "25 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Pernas",
                description: "Exercícios para força e equilíbrio.",
                duration: "25 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "B",
                name: "Treino B - Superior",
                description: "Fortalecimento da parte superior.",
                duration: "25 minutos",
                image: "../assets/img/flexao.png"
            },
            {
                id: "C",
                name: "Treino C - Estabilidade",
                description: "Exercícios de core e estabilidade.",
                duration: "20 minutos",
                image: "../assets/img/prancha.png"
            }
        ]
    },

    3: {
        title: "Semana 3",
        description: "Resistência física",
        introduction:
            "A terceira semana aumenta gradualmente a resistência e o condicionamento.",
        duration: "25 a 30 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Corpo todo",
                description: "Combinação de exercícios para resistência.",
                duration: "30 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "B",
                name: "Treino B - Mobilidade",
                description: "Mobilidade e resistência muscular.",
                duration: "25 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "C",
                name: "Treino C - Core",
                description: "Treino de abdômen e estabilidade.",
                duration: "25 minutos",
                image: "../assets/img/abdominal.png"
            }
        ]
    },

    4: {
        title: "Semana 4",
        description: "Manutenção e bem-estar",
        introduction:
            "Finalize o ciclo consolidando uma rotina equilibrada de exercícios para saúde e bem-estar.",
        duration: "30 minutos",
        level: "Iniciante",

        trainings: [
            {
                id: "A",
                name: "Treino A - Corpo todo",
                description: "Treino geral para manutenção da saúde.",
                duration: "30 minutos",
                image: "../assets/img/agachamento.png"
            },
            {
                id: "B",
                name: "Treino B - Resistência",
                description: "Treino leve para resistência e condicionamento.",
                duration: "30 minutos",
                image: "../assets/img/avanco.png"
            },
            {
                id: "C",
                name: "Treino C - Final",
                description: "Treino equilibrado para encerrar o ciclo.",
                duration: "30 minutos",
                image: "../assets/img/prancha.png"
            }
        ]
    }
}

};


function loadWeek() {
    const plan = weeks[selectedPlan];

    if (!plan) {
        showError();
        return;
    }

    const week = plan[selectedWeek];

    if (!week) {
        showError();
        return;
    }

    weekIntroduction.textContent = week.introduction;

    weekPlan.textContent = plan.name;

    weekTitle.textContent = week.title;

    weekDescription.textContent = week.description;

    weekWorkouts.textContent =
        week.trainings.length + " treinos";

    weekDuration.textContent =
        week.duration;

    weekLevel.textContent =
        week.level;

    trainingList.innerHTML = "";

    week.trainings.forEach(function(training) {

    const card = document.createElement("section");

    card.classList.add("training-card");


    card.innerHTML = `

        <section class="training-card-icon">

            <img
                src="${training.image}"
                alt="${training.name}">

        </section>


        <section class="training-card-content">

            <h3>
                ${training.name}
            </h3>

            <p>
                ${training.description}
            </p>


            <section class="training-tags">

                <p>
                    3 exercícios
                </p>

                <p>
                    ${training.duration}
                </p>

                <p>
                    ${week.level}
                </p>

            </section>

        </section>


        <section class="training-card-actions">

            <p class="training-arrow">
                ›
            </p>

            <a
                href="treino.html?plano=${selectedPlan}&semana=${selectedWeek}&treino=${training.id}"
                class="training-start">

                Começar treino →

            </a>

        </section>

    `;


    trainingList.appendChild(card);

});

}


function showError() {

    weekTitle.textContent =
        "Semana não encontrada";

    weekDescription.textContent =
        "Não encontramos os dados desta semana.";

    trainingList.innerHTML = "";

}


loadWeek();