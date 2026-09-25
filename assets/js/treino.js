const parameters =
    new URLSearchParams(window.location.search);


const selectedPlan =
    parameters.get("plano") || "emagrecimento";

const selectedWeek =
    parameters.get("semana") || "1";

const selectedTraining =
    parameters.get("treino") || "A";


const trainingPlan =
    document.querySelector("#training-plan");

const trainingTitle =
    document.querySelector("#training-title");

const trainingDescription =
    document.querySelector("#training-description");

const trainingDuration =
    document.querySelector("#training-duration");

const trainingLevel =
    document.querySelector("#training-level");

const trainingExerciseCount =
    document.querySelector("#training-exercise-count");

const exerciseList =
    document.querySelector("#training-exercise-list");

const progressPercent =
    document.querySelector("#training-progress-percent");

const progressValue =
    document.querySelector("#training-progress-value");

const progressText =
    document.querySelector("#training-progress-text");

const finishButton =
    document.querySelector("#finish-training-button");

const backButton =
    document.querySelector("#training-back");


const exerciseLibrary = {

    agachamento: {
        name: "Agachamento",
        muscle: "Pernas",
        level: "Iniciante",
        description: "Fortalece pernas e glúteos.",
        series: "3 séries",
        repetitions: "12 repetições",
        rest: "45 segundos",
        image: "../assets/img/agachamento.png"
    },

    agachamento15: {
        name: "Agachamento",
        muscle: "Pernas",
        level: "Iniciante",
        description: "Fortalece pernas, glúteos e melhora a estabilidade.",
        series: "3 séries",
        repetitions: "15 repetições",
        rest: "45 segundos",
        image: "../assets/img/agachamento.png"
    },

    avanco: {
        name: "Avanço",
        muscle: "Pernas",
        level: "Iniciante",
        description: "Trabalha pernas, glúteos e equilíbrio.",
        series: "3 séries",
        repetitions: "10 repetições por perna",
        rest: "45 segundos",
        image: "../assets/img/avanco.png"
    },

    flexao: {
        name: "Flexão de braço",
        muscle: "Peito",
        level: "Iniciante",
        description: "Fortalece peito, ombros e tríceps.",
        series: "3 séries",
        repetitions: "10 repetições",
        rest: "45 segundos",
        image: "../assets/img/flexao.png"
    },

    flexao12: {
        name: "Flexão de braço",
        muscle: "Peito",
        level: "Intermediário",
        description: "Trabalha peito, ombros, braços e estabilidade.",
        series: "3 séries",
        repetitions: "12 repetições",
        rest: "60 segundos",
        image: "../assets/img/flexao.png"
    },

    prancha: {
        name: "Prancha",
        muscle: "Core",
        level: "Iniciante",
        description: "Fortalece abdômen e melhora a estabilidade.",
        series: "3 séries",
        repetitions: "30 segundos",
        rest: "45 segundos",
        image: "../assets/img/prancha.png"
    },

    prancha45: {
        name: "Prancha",
        muscle: "Core",
        level: "Intermediário",
        description: "Aumenta a resistência do abdômen e do tronco.",
        series: "3 séries",
        repetitions: "45 segundos",
        rest: "45 segundos",
        image: "../assets/img/prancha.png"
    },

    abdominal: {
        name: "Abdominal",
        muscle: "Core",
        level: "Iniciante",
        description: "Fortalece a região abdominal.",
        series: "3 séries",
        repetitions: "15 repetições",
        rest: "45 segundos",
        image: "../assets/img/abdominal.png"
    },

    abdominal20: {
        name: "Abdominal",
        muscle: "Core",
        level: "Intermediário",
        description: "Desenvolve força e resistência abdominal.",
        series: "3 séries",
        repetitions: "20 repetições",
        rest: "45 segundos",
        image: "../assets/img/abdominal.png"
    }

};


function getExercises(names) {

    return names.map(function(name) {
        return { ...exerciseLibrary[name] };
    });

}


const trainings = {

    // Emagrecimento

    emagrecimento: {

        1: {

            A: {
                title: "Treino A - Corpo todo",
                description:
                    "Exercícios básicos para ativar o corpo e melhorar a resistência inicial.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Corpo todo",
                description:
                    "Aumento da intensidade com foco em força e estabilidade.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "flexao",
                    "abdominal"
                ])
            },

            C: {
                title: "Treino C - Corpo todo",
                description:
                    "Consolidação dos movimentos e melhora do condicionamento.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "prancha",
                    "abdominal"
                ])
            }

        },


        2: {

            A: {
                title: "Treino A - Pernas e glúteos",
                description:
                    "Fortalecimento dos membros inferiores e melhora do equilíbrio.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento"
                ])
            },

            B: {
                title: "Treino B - Superior e core",
                description:
                    "Treino para peito, braços e região abdominal.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "flexao",
                    "prancha",
                    "abdominal"
                ])
            },

            C: {
                title: "Treino C - Corpo todo",
                description:
                    "Combinação de exercícios para condicionamento geral.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha"
                ])
            }

        },


        3: {

            A: {
                title: "Treino A - Pernas",
                description:
                    "Treino focado no fortalecimento de pernas e glúteos.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento"
                ])
            },

            B: {
                title: "Treino B - Superior",
                description:
                    "Exercícios para peito, braços, ombros e abdômen.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "flexao",
                    "prancha",
                    "abdominal"
                ])
            },

            C: {
                title: "Treino C - Resistência",
                description:
                    "Sequência de exercícios para melhorar o condicionamento.",
                duration: "35 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "flexao",
                    "prancha45"
                ])
            },

            D: {
                title: "Treino D - Corpo todo",
                description:
                    "Treino completo para trabalhar diferentes grupos musculares.",
                duration: "35 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "flexao",
                    "abdominal20"
                ])
            }

        },


        4: {

            A: {
                title: "Treino A - Corpo todo",
                description:
                    "Treino completo combinando força e condicionamento.",
                duration: "35 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "flexao",
                    "prancha45"
                ])
            },

            B: {
                title: "Treino B - Resistência",
                description:
                    "Treino para melhorar resistência física e muscular.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "abdominal20",
                    "prancha"
                ])
            },

            C: {
                title: "Treino C - Força",
                description:
                    "Exercícios focados na evolução da força.",
                duration: "35 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "flexao12",
                    "abdominal"
                ])
            },

            D: {
                title: "Treino D - Final",
                description:
                    "Treino completo para finalizar o primeiro ciclo.",
                duration: "35 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "avanco",
                    "prancha45"
                ])
            }

        }

    },


    // Ganho de massa

    massa: {

        1: {

            A: {
                title: "Treino A - Peito e braços",
                description:
                    "Fortalecimento da parte superior do corpo.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao12",
                    "flexao",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Pernas",
                description:
                    "Treino para desenvolver pernas e glúteos.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento"
                ])
            },

            C: {
                title: "Treino C - Core e superior",
                description:
                    "Fortalecimento abdominal e da parte superior.",
                duration: "30 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao",
                    "abdominal20",
                    "prancha45"
                ])
            },

            D: {
                title: "Treino D - Corpo todo",
                description:
                    "Treino geral para os principais grupos musculares.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "avanco"
                ])
            }

        },


        2: {

            A: {
                title: "Treino A - Peito e tríceps",
                description:
                    "Maior intensidade para a parte superior.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao12",
                    "flexao",
                    "prancha45"
                ])
            },

            B: {
                title: "Treino B - Pernas e glúteos",
                description:
                    "Progressão de força dos membros inferiores.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento15"
                ])
            },

            C: {
                title: "Treino C - Abdômen",
                description:
                    "Treino para força e estabilidade do core.",
                duration: "30 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "abdominal20",
                    "prancha45",
                    "abdominal"
                ])
            },

            D: {
                title: "Treino D - Corpo todo",
                description:
                    "Combinação dos movimentos da semana.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "flexao12",
                    "avanco"
                ])
            }

        },


        3: {

            A: {
                title: "Treino A - Superior",
                description:
                    "Treino de força para a parte superior.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao12",
                    "flexao12",
                    "prancha45"
                ])
            },

            B: {
                title: "Treino B - Pernas",
                description:
                    "Fortalecimento e resistência dos membros inferiores.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento15"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Exercícios para abdômen e estabilidade.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "abdominal20",
                    "prancha45",
                    "abdominal20"
                ])
            },

            D: {
                title: "Treino D - Corpo todo",
                description:
                    "Treino combinado de força e resistência.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "flexao12",
                    "avanco"
                ])
            }

        },


        4: {

            A: {
                title: "Treino A - Superior",
                description:
                    "Progressão para peito, braços e ombros.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao12",
                    "flexao",
                    "prancha45"
                ])
            },

            B: {
                title: "Treino B - Inferior",
                description:
                    "Progressão para pernas e glúteos.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento15"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Fortalecimento da região abdominal.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "abdominal20",
                    "prancha45",
                    "abdominal"
                ])
            },

            D: {
                title: "Treino D - Completo",
                description:
                    "Exercícios para todo o corpo.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento",
                    "flexao12",
                    "avanco"
                ])
            }

        },


        5: {

            A: {
                title: "Treino A - Força superior",
                description:
                    "Treino intenso da parte superior.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao12",
                    "flexao12",
                    "prancha45"
                ])
            },

            B: {
                title: "Treino B - Força inferior",
                description:
                    "Treino intenso de pernas e glúteos.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento15"
                ])
            },

            C: {
                title: "Treino C - Abdômen",
                description:
                    "Força e resistência abdominal.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "abdominal20",
                    "prancha45",
                    "abdominal20"
                ])
            },

            D: {
                title: "Treino D - Corpo todo",
                description:
                    "Treino completo com maior intensidade.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "flexao12",
                    "avanco"
                ])
            }

        },


        6: {

            A: {
                title: "Treino A - Superior",
                description:
                    "Consolidação da força da parte superior.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "flexao12",
                    "flexao",
                    "prancha45"
                ])
            },

            B: {
                title: "Treino B - Pernas",
                description:
                    "Treino completo para membros inferiores.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "agachamento"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Treino completo de abdômen.",
                duration: "35 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "abdominal20",
                    "prancha45",
                    "abdominal20"
                ])
            },

            D: {
                title: "Treino D - Final",
                description:
                    "Treino final envolvendo todo o corpo.",
                duration: "40 minutos",
                level: "Intermediário",
                exercises: getExercises([
                    "agachamento15",
                    "flexao12",
                    "avanco"
                ])
            }

        }

    },


    // Mais disposição

    disposicao: {

        1: {

            A: {
                title: "Treino A - Corpo todo",
                description:
                    "Movimentos básicos para ativar o corpo.",
                duration: "20 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Mobilidade",
                description:
                    "Movimentos leves e trabalho de resistência.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "agachamento",
                    "prancha"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Fortalecimento leve da região central.",
                duration: "20 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "abdominal",
                    "prancha",
                    "abdominal"
                ])
            }

        },


        2: {

            A: {
                title: "Treino A - Pernas",
                description:
                    "Fortalecimento dos membros inferiores.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "avanco",
                    "agachamento15"
                ])
            },

            B: {
                title: "Treino B - Corpo todo",
                description:
                    "Movimentos combinados para aumentar disposição.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Treino abdominal e estabilidade.",
                duration: "20 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "abdominal",
                    "prancha",
                    "abdominal"
                ])
            }

        },


        3: {

            A: {
                title: "Treino A - Resistência",
                description:
                    "Exercícios para aumentar a resistência.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "avanco",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Corpo todo",
                description:
                    "Sequência completa para condicionamento.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "abdominal"
                ])
            },

            C: {
                title: "Treino C - Estabilidade",
                description:
                    "Fortalecimento de core e postura.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "prancha",
                    "abdominal",
                    "prancha"
                ])
            }

        },


        4: {

            A: {
                title: "Treino A - Corpo todo",
                description:
                    "Treino completo de condicionamento.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "flexao",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Resistência",
                description:
                    "Treino focado em resistência física.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "agachamento",
                    "abdominal"
                ])
            },

            C: {
                title: "Treino C - Final",
                description:
                    "Treino final do ciclo de disposição.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha45"
                ])
            }

        }

    },


    // Saúde geral

    saude: {

        1: {

            A: {
                title: "Treino A - Mobilidade",
                description:
                    "Movimentos leves para melhorar mobilidade.",
                duration: "20 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "agachamento",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Corpo todo",
                description:
                    "Exercícios básicos para todo o corpo.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Fortalecimento básico da região abdominal.",
                duration: "20 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "abdominal",
                    "prancha",
                    "abdominal"
                ])
            }

        },


        2: {

            A: {
                title: "Treino A - Pernas",
                description:
                    "Exercícios para força e equilíbrio.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "avanco",
                    "agachamento"
                ])
            },

            B: {
                title: "Treino B - Superior",
                description:
                    "Fortalecimento da parte superior.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "flexao",
                    "prancha",
                    "flexao"
                ])
            },

            C: {
                title: "Treino C - Estabilidade",
                description:
                    "Exercícios de core e estabilidade.",
                duration: "20 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "prancha",
                    "abdominal",
                    "prancha"
                ])
            }

        },


        3: {

            A: {
                title: "Treino A - Corpo todo",
                description:
                    "Combinação de exercícios para resistência.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento15",
                    "flexao",
                    "avanco"
                ])
            },

            B: {
                title: "Treino B - Mobilidade",
                description:
                    "Mobilidade e resistência muscular.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "agachamento",
                    "prancha"
                ])
            },

            C: {
                title: "Treino C - Core",
                description:
                    "Treino de abdômen e estabilidade.",
                duration: "25 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "abdominal",
                    "prancha",
                    "abdominal20"
                ])
            }

        },


        4: {

            A: {
                title: "Treino A - Corpo todo",
                description:
                    "Treino geral para manutenção da saúde.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha"
                ])
            },

            B: {
                title: "Treino B - Resistência",
                description:
                    "Treino leve para resistência e condicionamento.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "avanco",
                    "agachamento15",
                    "abdominal"
                ])
            },

            C: {
                title: "Treino C - Final",
                description:
                    "Treino equilibrado para encerrar o ciclo.",
                duration: "30 minutos",
                level: "Iniciante",
                exercises: getExercises([
                    "agachamento",
                    "flexao",
                    "prancha45"
                ])
            }

        }

    }

};

function loadTraining() {

    const plan =
        trainings[selectedPlan];

    if (!plan) {
        showTrainingError();
        return;
    }


    const week =
        plan[selectedWeek];

    if (!week) {
        showTrainingError();
        return;
    }


    const training =
        week[selectedTraining];

    if (!training) {
        showTrainingError();
        return;
    }


    trainingPlan.textContent =
        "SEMANA " +
        selectedWeek +
        " • " +
        selectedPlan.toUpperCase();


    trainingTitle.textContent =
        training.title;


    trainingDescription.textContent =
        training.description;


    trainingDuration.textContent =
        training.duration;


    trainingLevel.textContent =
        training.level;


    trainingExerciseCount.textContent =
        training.exercises.length +
        " exercícios";


    backButton.href =
        "semana.html?plano=" +
        selectedPlan +
        "&semana=" +
        selectedWeek;


    exerciseList.innerHTML = "";


    training.exercises.forEach(
        function(exercise, index) {

            const card =
                document.createElement("section");


            card.classList.add(
                "training-exercise-card"
            );


            card.innerHTML = `

                <section class="training-exercise-number">
                    ${index + 1}
                </section>


                <img
                    src="${exercise.image}"
                    alt="${exercise.name}"
                    class="training-exercise-image">


                <section class="training-exercise-info">

                    <h3>
                        ${exercise.name}
                    </h3>


                    <section class="training-exercise-tags">

                        <p>
                            ${exercise.muscle}
                        </p>

                        <p>
                            ${exercise.level}
                        </p>

                    </section>


                    <p>
                        ${exercise.description}
                    </p>


                    <section class="training-exercise-details">

                        <p>
                            ${exercise.series}
                        </p>

                        <p>
                            ${exercise.repetitions}
                        </p>

                        <p>
                            Descanso: ${exercise.rest}
                        </p>

                    </section>

                </section>


                <input
                    type="checkbox"
                    class="exercise-complete"
                    aria-label="Concluir ${exercise.name}">

            `;


            exerciseList.appendChild(card);

        });


    addProgressEvents();

}

function addProgressEvents() {

    const checkboxes =
        document.querySelectorAll(
            ".exercise-complete"
        );


    checkboxes.forEach(function(checkbox) {

        checkbox.addEventListener(
            "change",
            updateProgress
        );

    });


    updateProgress();

}


function updateProgress() {

    const checkboxes =
        document.querySelectorAll(
            ".exercise-complete"
        );


    const total =
        checkboxes.length;


    const completed =
        document.querySelectorAll(
            ".exercise-complete:checked"
        ).length;


    const percent =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );


    progressPercent.textContent =
        percent + "%";


    progressValue.style.width =
        percent + "%";


    progressText.textContent =
        completed +
        " de " +
        total +
        " exercícios concluídos";


    finishButton.disabled =
        completed !== total;

}

function showTrainingError() {

    trainingTitle.textContent =
        "Treino não encontrado";

    trainingDescription.textContent =
        "Não encontramos os dados deste treino.";

    exerciseList.innerHTML = "";

}


finishButton.addEventListener(
    "click",
    function() {

        alert(
            "Treino concluído com sucesso!"
        );

    }
);


loadTraining();