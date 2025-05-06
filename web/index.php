<!DOCTYPE HTML>
<html lang="en-GB">
<head>
    <!-- meta -->
    <!-- charset, application-name author, description, keywords, viewport -->
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

    <!-- title -->
    <title>Word Counter</title>

    <!-- third libraries -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- specific google font... -->
    <!-- font awesome... -->

    <!-- first party resources -->
    <link rel="stylesheet" type="text/css" href="./css/styles.css" />
    <script type="text/javascript" src="./js/script.js"></script>
</head>
<body>
    <header>
        <h1>Word Counter</h1>
    </header>

    <main>
        <section id="counter">
            <ul>
                <li>Word count: <span id="word-count">0</span></li>
                <li>Character count: <span id="character-count">0</span></li>
                <!-- <li>Space count: </li> -->
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
        <p id="copyright">
            &copy; <span id="current-year"><?php echo date("Y") ?></span>
            Lyndon Mykal Panton | All Rights Reserved
        </p>
    </footer>
</body>
</html>
