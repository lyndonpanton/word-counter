<!DOCTYPE HTML>
<html lang="en-GB">
<head>
    <?php
        include("config.php");
    ?>
    <!-- meta: charset, application-name, author, description, keywords,
            viewport -->
    <meta charset="UTF-8" />
    <meta name="application-name" content="word-counter" />
    <meta name="author" content="Lyndon Mykal Panton" />
    <meta name="description" content="An application which allows users to view
            statistics about text they supply to the application, such as the
            word count, character count, space counter, and word occurrence
            count." />
    <meta name="keywords" content="word, count, counter, document, literature,
            report, assignment, writing, literature, text, grammar" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
            user-scalable=true, minimum-scale=0.25, maximum-scale=2.0" />

    <!-- tab: favicon, title -->
    <link rel="icon" type="image/x-icon" href="./img/favicon.ico" />
    <title>Word Counter</title>

    <!-- third libraries -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- specific google font... -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Jost:ital,wght@0,100..900;1,100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
    <!-- font awesome... -->
    <script src=<?php echo "https://kit.fontawesome.com/" . API_FONTAWESOME . ".js"; ?> crossorigin="anonymous"></script>

    <!-- first party resources -->
    <link rel="stylesheet" type="text/css" href="./css/styles.css" />
    <link rel="stylesheet" type="text/css" href="./css/laptop.css" />
    <script type="text/javascript" src="./js/script.js"></script>
</head>
<body>
    <header>
        <i id="more-information" class="fa-solid fa-circle-info" tabindex="1"></i>
        <h1>Word Counter</h1>
    </header>

    <main>
        <section id="counter">
            <ul>
                <li>Word count: <span id="word-count">0</span></li>
                <li>Letter count: <span id="letter-count">0</span></li>
                <li>Space count: <span id="space-count">0</span></li>
                <li>Special character count: <span id="special-character-count">0</span></li>
                <!-- list common words, maybe skip words less than 4 characters
                        long -->
            </ul>
        </section>

        <section id="words">
            <textarea id="word-input">

            </textarea>
        </section>
    </main>

    <footer>
        <section id="project">
            <ul class="project-list">
                <li class="project-list-item project-list-heading">
                    Developer Information
                </li>
                <li class="project-list-item">
                    <a href="https://www.linkedin.com/in/lyndonpanton/" target="_blank">LinkedIn</a>
                </li>
                <li class="project-list-item">
                    <a href="https://github.com/lyndonpanton" target="_blank">GitHub</a>
                </li>
                <li class="project-list-item">
                    <a href="https://lyndonpanton.co.uk/" target="_blank">Website</a>
                </li>
            </ul>
            <ul class="project-list">
                <li class="project-list-item project-list-heading">
                    Languages and Frameworks
                </li>
                <li class="project-list-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a>
                </li>
                <li class="project-list-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>
                </li>
                <li class="project-list-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
                </li>
                <li class="project-list-item">
                    <a href="https://www.php.net/" target="_blank">PHP</a>
                </li>
            </ul>
            <ul class="project-list">
                <li class="project-list-item project-list-heading">
                    Packages and Libraries
                </li>
                <li class="project-list-item">
                    <a href="https://fontawesome.com/" target="_blank">Fontawesome</a>
                </li>
                <li class="project-list-item">
                    <a href="https://fonts.google.com/" target="_blank">Google Fonts<a>
                </li>
            </ul>
            <ul class="project-list">
                <li class="project-list-item project-list-heading">
                    More Projects
                </li>
                <li class="project-list-item">
                    <a href="https://github.com/lyndonpanton/portfolio" target="_blank">Portfolio</a>
                </li>
                <li class="project-list-item">
                    <a href="https://github.com/lyndonpanton/task-list" target="_blank">Task List</a>
                </li>
                <li class="project-list-item">
                    <a href="https://github.com/lyndonpanton/word-counter" target="_blank">Word Counter</a>
                </li>
                <li class="project-list-item">
                    <a href="#" target="_blank">???</a>
                </li>
            </ul>
        </section>

        <section id="data">
            <ul id="data-legal">
                <li><a href="#" target="_blank">Privacy Policy</a></li>
                <li><a href="#" target="_blank">Terms and Conditions</a></li>
                <li><a href="#" target="_blank">Cookies</a></li>
            </ul>

            <ul id="data-social">
                <li><a href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
        </section>

        <p id="copyright">
            &copy; <span id="current-year"><?php echo date("Y") ?></span>
            Lyndon Mykal Panton | All Rights Reserved
        </p>
    </footer>
</body>
</html>
