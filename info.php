<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>

<body>

<h1>Informations PHP</h1>

<?php
$etablissement = "faculté";
$module = "Programmation Web";
$annee = 2025;

$a = 15;
$b = 7;

$addition = $a + $b;
$multiplication = $a * $b;

echo "<h2>Informations</h2>";
echo "Nom de l’établissement : $etablissement <br>";
echo "Module : $module <br>";
echo "Année : $annee <br><br>";

echo "<h2>Variables numériques</h2>";
echo "a = $a <br>";
echo "b = $b <br>";
echo "a + b = $addition <br>";
echo "a × b = $multiplication <br>";
?>

</body>
</html>
