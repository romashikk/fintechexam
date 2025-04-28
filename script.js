const questions = [
    {
        question: "Что такое машинное обучение и к какой области науки оно относится?",
        answers: [
            "Наука о создании роботов (робототехника).",
            "Подраздел искусственного интеллекта, изучающий алгоритмы, способные обучаться.",
            "Раздел математики, изучающий статистические методы.",
            "Технология для обработки больших данных.",
            "Направление в программировании для создания игр."
        ],
        correctAnswer: 1
    },
    {
        question: "В чем заключается основное отличие данных от знаний?",
        answers: [
            "Данные — это числа, а знания — текст.",
            "Данные — зафиксированные факты, знания — сведения, позволяющие действовать с прогнозируемым результатом.",
            "Знания хранятся в облаке, а данные — на локальных серверах.",
            "Данные структурированы, знания — нет.",
            "Знания используются только в науке, данные — в бизнесе."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие типы данных могут использоваться для обучения моделей машинного обучения?",
        answers: [
            "Только числовые таблицы.",
            "Текст, сигналы, изображения, видео, таблицы.",
            "Только изображения.",
            "Данные из социальных сетей.",
            "Только структурированные базы данных."
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое глубокое обучение и чем оно отличается от традиционного машинного обучения?",
        answers: [
            "Использование облачных технологий.",
            "Алгоритмы, изучающие множество уровней представления (абстракции).",
            "Обучение без учителя.",
            "Работа только с текстовыми данными.",
            "Отсутствие необходимости в данных."
        ],
        correctAnswer: 1
    },
    {
        question: "Какую роль играют нейронные сети в машинном обучении?",
        answers: [
            "Уменьшение объема данных.",
            "Математическая модель, имитирующая работу биологических нейронов, для решения сложных задач.",
            "Хранение данных в облаке.",
            "Шифрование информации.",
            "Генерация случайных чисел."
        ],
        correctAnswer: 1
    },
    {
        question: "Применение алгоритмов машинного обучения в прогнозировании.",
        answers: [
            "Создание игр.",
            "Прогнозирование состояния дорожного полотна, поломок оборудования.",
            "Разработка мобильных приложений.",
            "Управление финансами банков.",
            "Генерация музыки."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие задачи можно решить с помощью глубокого обучения?",
        answers: [
            "Только классификацию изображений.",
            "Распознавание речи, обработку естественных языков, медицинскую диагностику.",
            "Создание презентаций.",
            "Управление роботами-пылесосами.",
            "Шифрование данных."
        ],
        correctAnswer: 1
    },
    {
        question: "Почему для глубокого обучения требуется большое количество данных и вычислительных ресурсов?",
        answers: [
            "Для красивого оформления графиков.",
            "Нейронные сети имеют множество параметров и слоев, требующих обучения.",
            "Чтобы хранить резервные копии.",
            "Для работы с малым количеством признаков.",
            "Чтобы обойтись без алгоритмов."
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое преобразование данных и зачем оно нужно в аналитике?",
        answers: [
            "Удаление всех данных.",
            "Процесс изменения данных для улучшения их качества и пригодности для анализа.",
            "Переименование файлов.",
            "Шифрование данных.",
            "Резервное копирование."
        ],
        correctAnswer: 1
    },
    {
        question: "В чем разница между преобразованием данных и преобразованием признаков?",
        answers: [
            "Преобразование данных — изменение всего набора, признаков — только фичей.",
            "Преобразование данных включает шифрование, признаков — нормализацию.",
            "Никакой разницы.",
            "Преобразование данных — для текста, признаков — для чисел.",
            "Преобразование данных — для облаков, признаков — для локальных серверов."
        ],
        correctAnswer: 0
    },
    {
        question: "Binding, Mapping и Reducing.",
        answers: [
            "Методы шифрования данных.",
            "Этапы ETL: объединение, преобразование, агрегация данных.",
            "Алгоритмы машинного обучения.",
            "Типы нейронных сетей.",
            "Методы визуализации."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие основные методы нормализации данных вы знаете?",
        answers: [
            "Удаление столбцов.",
            "Min-Max Scaling, Z-score Standardization, Robust Scaler.",
            "Шифрование AES-256.",
            "Генерация случайных чисел.",
            "Копирование данных в облако."
        ],
        correctAnswer: 1
    },
    {
        question: "В каких случаях целесообразно применять Log Transform или Square Root Transform?",
        answers: [
            "Для увеличения выбросов.",
            "Для борьбы с асимметрией данных и уменьшения влияния выбросов.",
            "Для создания новых признаков.",
            "Для шифрования данных.",
            "Для визуализации."
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое One-Hot Encoding и зачем он используется?",
        answers: [
            "Метод сжатия данных.",
            "Преобразование категориальных признаков в бинарные векторы.",
            "Удаление пропущенных значений.",
            "Шифрование текста.",
            "Генерация случайных чисел."
        ],
        correctAnswer: 1
    },
    {
        question: "Для чего применяется метод PCA в процессе преобразования признаков?",
        answers: [
            "Для увеличения размерности данных.",
            "Для уменьшения размерности и выделения главных компонент.",
            "Для шифрования данных.",
            "Для создания новых категорий.",
            "Для визуализации в 3D."
        ],
        correctAnswer: 1
    },
    {
        question: "Что включает в себя процесс Feature Engineering?",
        answers: [
            "Удаление всех признаков.",
            "Создание, преобразование и отбор признаков.",
            "Шифрование данных.",
            "Резервное копирование.",
            "Генерация случайных данных."
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое облачные технологии и в чем заключается их основное преимущество?",
        answers: [
            "Локальное хранение данных.",
            "Распределенная обработка данных через интернет как сервис; сокращение затрат на ИТ-инфраструктуру.",
            "Использование флеш-накопителей.",
            "Офлайн-сервисы для бизнеса.",
            "Ручное управление серверами."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие три модели облачных услуг существуют?",
        answers: [
            "HTTP, FTP, TCP/IP.",
            "IaaS, PaaS, SaaS.",
            "HTML, CSS, JavaScript.",
            "CPU, GPU, RAM.",
            "LAN, WAN, VPN."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие управленческие и экономические преимущества дают облачные технологии?",
        answers: [
            "Увеличение расходов на ИТ.",
            "Сокращение затрат, оптимизация ресурсов, мобильность.",
            "Ручное управление данными.",
            "Уменьшение производительности.",
            "Отсутствие доступа к данным."
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое гиперконвергентная инфраструктура и чем она отличается от традиционного ЦОД?",
        answers: [
            "Объединение хранилища, вычислений и сети в единую систему; линейная масштабируемость.",
            "Использование только физических серверов.",
            "Отсутствие резервного копирования.",
            "Требование большего пространства.",
            "Ручное масштабирование."
        ],
        correctAnswer: 0
    },
    {
        question: "Какие технические меры защиты используются в облачных хранилищах для обеспечения безопасности данных?",
        answers: [
            "Пароль \"12345\".",
            "Межсетевые экраны, шифрование, системы предотвращения вторжений.",
            "Удаление данных раз в неделю.",
            "Отсутствие резервных копий.",
            "Использование только HTTP."
        ],
        correctAnswer: 1
    },
    {
        question: "Каковы основные регуляторные цели, способствующие появлению FinTech экосистем?",
        answers: [
            "Запрет интернета.",
            "Создание доверенной среды, стандартизация транзакций, безопасность.",
            "Увеличение наличных расчетов.",
            "Отказ от цифровизации.",
            "Ручная обработка данных."
        ],
        correctAnswer: 1
    },
    {
        question: "Перечислите ключевые потребности поставщиков в FinTech экосистемах.",
        answers: [
            "Увеличение бумажного документооборота.",
            "Привлечение клиентов, снижение затрат, автоматизация.",
            "Отказ от технологий.",
            "Ручное управление рисками.",
            "Использование только наличных."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие технологические факторы способствуют развитию FinTech?",
        answers: [
            "Пейджеры и факсы.",
            "ИИ, блокчейн, облачные технологии.",
            "Ручные калькуляторы.",
            "Бумажные чеки.",
            "Отсутствие интернета."
        ],
        correctAnswer: 1
    },
    {
        question: "Приведите примеры того, как могут выглядеть платформы в FinTech.",
        answers: [
            "Каменные таблички.",
            "Платежные системы, кредитные маркетплейсы, системы идентификации.",
            "Ручные счеты.",
            "Телеграф.",
            "Факсимильные аппараты."
        ],
        correctAnswer: 1
    },
    {
        question: "Каким образом внедрение платформ влияет на конкурентную среду в финансовой индустрии?",
        answers: [
            "Уменьшает конкуренцию.",
            "Повышает конкуренцию за счет прозрачности и доступности услуг.",
            "Запрещает использование технологий.",
            "Увеличивает затраты на вход.",
            "Снижает инновации."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие преимущества предоставляют единые бизнес-правила в рамках FinTech платформ?",
        answers: [
            "Хаос и неразбериха.",
            "Стандартизация, снижение рисков, упрощение взаимодействия.",
            "Увеличение бумажной работы.",
            "Замедление процессов.",
            "Отсутствие контроля."
        ],
        correctAnswer: 1
    },
    {
        question: "Как платформы влияют на бизнес-модели банков?",
        answers: [
            "Банки закрываются.",
            "Банки интегрируются с платформами, автоматизируют процессы.",
            "Банки переходят на наличные.",
            "Банки отказываются от клиентов.",
            "Банки увеличивают комиссии."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие виды банковских продуктов могут быть интегрированы в новую FinTech систему?",
        answers: [
            "Только депозиты.",
            "Кредиты, платежи, инвестиционные продукты.",
            "Только ипотека.",
            "Товары из супермаркета.",
            "Криптовалюты."
        ],
        correctAnswer: 1
    },
    {
        question: "Что такое маркетплейс кредитование (marketplace lending)?",
        answers: [
            "Продажа товаров на рынке.",
            "P2P-кредитование через онлайн-платформы без посредничества банков.",
            "Кредитование только для бизнеса.",
            "Использование криптовалют.",
            "Ручное оформление займов."
        ],
        correctAnswer: 1
    },
    {
        question: "Каковы основные отличия P2P-кредитования от традиционного кредитования?",
        answers: [
            "Использование телеграфа.",
            "Отсутствие банков-посредников, инновационный андеррайтинг.",
            "Только для миллионеров.",
            "Отказ от интернета.",
            "Выдача кредитов в золоте."
        ],
        correctAnswer: 1
    },
    {
        question: "Назовите три основные платформы маркетплейс кредитования и укажите страны, в которых они были созданы.",
        answers: [
            "LendingClub (США), Funding Circle (Великобритания), Zopa (Великобритания).",
            "Amazon (США), Alibaba (Китай), eBay (США).",
            "Google (США), Facebook (США), Twitter (США).",
            "Tesla (США), Samsung (Корея), Sony (Япония).",
            "Boeing (США), Airbus (ЕС), SpaceX (США)."
        ],
        correctAnswer: 0
    },
    {
        question: "Кто является основными участниками маркетплейс кредитования?",
        answers: [
            "Только банки.",
            "P2P-платформы, индивидуальные и институциональные инвесторы, заемщики.",
            "Супермаркеты.",
            "Кинотеатры.",
            "Фермеры."
        ],
        correctAnswer: 1
    },
    {
        question: "Какие виды P2P платформ существуют?",
        answers: [
            "Только для покупки еды.",
            "Потребительские кредиты, бизнес-кредиты, ипотека.",
            "Платформы для путешествий.",
            "Социальные сети.",
            "Платформы для стриминга."
        ],
        correctAnswer: 1
    },
    {
        question: "Перечислите 6 \"C\" P2P и кратко опишите значение каждого из них.",
        answers: [
            "Character, Capacity, Capital, Collateral, Conditions, Credit Score — оценка заемщика.",
            "Cloud, Code, Cache, CPU, Crypto, Cache.",
            "Cash, Cars, Clothes, Crypto, Contracts, Cookies.",
            "China, Canada, Chile, Cuba, Congo, Croatia.",
            "Cat, Dog, Cow, Chicken, Camel, Crow."
        ],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = new Set();
let userAnswers = [];
let attempts = JSON.parse(localStorage.getItem('attempts')) || [];
let shuffledAnswersMap = {};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.getElementById('currentQuestion');
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = currentQuestionIndex + 1;
}

function showQuestion() {
    const questionContainer = document.querySelector('.question-container');
    const resultContainer = document.querySelector('.result-container');
    
    if (currentQuestionIndex >= questions.length) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        showResults();
        return;
    }

    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    // Если уже есть перемешанные индексы для этого вопроса, используем их, иначе создаём новые
    let shuffledIndices = shuffledAnswersMap[currentQuestionIndex];
    if (!shuffledIndices) {
        shuffledIndices = shuffleArray([...Array(question.answers.length).keys()]);
        shuffledAnswersMap[currentQuestionIndex] = shuffledIndices;
    }

    shuffledIndices.forEach((answerIndex, displayIndex) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = question.answers[answerIndex];

        // Подсветка после ответа
        if (answeredQuestions.has(currentQuestionIndex)) {
            const userAnswer = userAnswers[currentQuestionIndex];
            if (answerIndex === question.correctAnswer) {
                button.classList.add('correct');
            }
            if (userAnswer && userAnswer.selectedShuffledIndex === displayIndex && answerIndex !== question.correctAnswer) {
                button.classList.add('incorrect');
            }
        }

        button.addEventListener('click', () => handleAnswer(displayIndex));
        answersContainer.appendChild(button);
    });

    updateProgress();
}

function handleAnswer(selectedShuffledIndex) {
    if (answeredQuestions.has(currentQuestionIndex)) return;

    const question = questions[currentQuestionIndex];
    const shuffledIndices = shuffledAnswersMap[currentQuestionIndex];
    const selectedAnswerIndex = shuffledIndices[selectedShuffledIndex];
    const buttons = document.querySelectorAll('.answer-button');

    buttons.forEach((button, displayIndex) => {
        const answerIndex = shuffledIndices[displayIndex];
        if (answerIndex === question.correctAnswer) {
            button.classList.add('correct');
        }
        if (displayIndex === selectedShuffledIndex && answerIndex !== question.correctAnswer) {
            button.classList.add('incorrect');
        }
    });

    if (selectedAnswerIndex === question.correctAnswer) {
        score++;
    }

    userAnswers[currentQuestionIndex] = {
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedAnswerIndex,
        selectedShuffledIndex: selectedShuffledIndex,
        correctAnswer: question.correctAnswer,
        isCorrect: selectedAnswerIndex === question.correctAnswer
    };

    answeredQuestions.add(currentQuestionIndex);

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 700);
}

function saveAttempt() {
    const attemptName = document.getElementById('attemptName').value.trim() || `Попытка ${attempts.length + 1}`;
    
    const attempt = {
        id: Date.now(),
        name: attemptName,
        date: new Date().toLocaleString(),
        score: score,
        percentage: Math.round((score / questions.length) * 100),
        answers: userAnswers
    };
    
    attempts.push(attempt);
    localStorage.setItem('attempts', JSON.stringify(attempts));
    
    updateAttemptsList();
    document.getElementById('attemptName').value = '';
}

function updateAttemptsList() {
    const attemptsList = document.getElementById('attemptsList');
    attemptsList.innerHTML = '';
    
    attempts.forEach(attempt => {
        const attemptItem = document.createElement('div');
        attemptItem.className = 'attempt-item';
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-attempt';
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', () => deleteAttempt(attempt.id));
        
        attemptItem.innerHTML = `
            <h4>${attempt.name}</h4>
            <p>Дата: ${attempt.date}</p>
            <p>Результат: ${attempt.score} из ${questions.length} (${attempt.percentage}%)</p>
        `;
        
        attemptItem.appendChild(deleteButton);
        attemptsList.appendChild(attemptItem);
    });
}

function deleteAttempt(id) {
    attempts = attempts.filter(attempt => attempt.id !== id);
    localStorage.setItem('attempts', JSON.stringify(attempts));
    updateAttemptsList();
}

function showAllQuestions() {
    const modal = document.getElementById('allQuestionsModal');
    const allQuestionsList = document.getElementById('allQuestionsList');
    allQuestionsList.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        
        const userAnswer = userAnswers[index];
        
        questionItem.innerHTML = `
            <h3>Вопрос ${index + 1}: ${question.question}</h3>
        `;
        
        question.answers.forEach((answer, answerIndex) => {
            const answerItem = document.createElement('div');
            answerItem.className = 'answer-item';
            
            if (userAnswer) {
                if (answerIndex === question.correctAnswer) {
                    answerItem.classList.add('correct');
                } else if (answerIndex === userAnswer.selectedAnswer) {
                    answerItem.classList.add('incorrect');
                }
            }
            
            if (userAnswer && answerIndex === userAnswer.selectedAnswer) {
                answerItem.classList.add('selected');
            }
            
            answerItem.textContent = answer;
            questionItem.appendChild(answerItem);
        });
        
        allQuestionsList.appendChild(questionItem);
    });
    
    modal.style.display = 'block';
}

function showResults() {
    const finalScore = document.getElementById('finalScore');
    const percentageScore = document.getElementById('percentageScore');
    const scorePercentage = (score / questions.length) * 100;
    
    finalScore.textContent = score;
    percentageScore.textContent = Math.round(scorePercentage);

    const ctx = document.getElementById('resultChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Правильные ответы', 'Неправильные ответы'],
            datasets: [{
                data: [score, questions.length - score],
                backgroundColor: ['#4CAF50', '#f44336']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    updateAttemptsList();
}

// Инициализация
document.getElementById('restartButton').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions.clear();
    userAnswers = [];
    showQuestion();
});

document.getElementById('saveAttemptButton').addEventListener('click', saveAttempt);

document.getElementById('showAllQuestionsButton').addEventListener('click', showAllQuestions);

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('allQuestionsModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('allQuestionsModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Инициализация теста
showQuestion();
updateAttemptsList(); 