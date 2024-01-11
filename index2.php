<!DOCTYPE html>
<html>
<head>
    <title>Rastgele Sayı Tablosu</title>
</head>
<body>

<form method="post">
    <table>
        <tr>
   <td><label for="satir">Satır Sayısı:</label></td> 
   <td><input type="number" name="satir" required></td> 
    </tr>

    <tr>
    <td><label for="sutun">Sütun Sayısı:</label></td> 
    <td><input type="number" name="sutun" required></td> 
    </tr>

    <tr>
        <td></td>
    <td>
    <input type="submit" value="Tabloyu Oluştur">
    </td>
    </tr>
    </table>
</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $satir_sayisi = isset($_POST['satir']) ? intval($_POST['satir']) : 0;
    $sutun_sayisi = isset($_POST['sutun']) ? intval($_POST['sutun']) : 0;

    
    if ($satir_sayisi > 0 && $sutun_sayisi > 0) {
        echo '<table border="1">';
        for ($i = 1; $i <= $satir_sayisi; $i++) {
            echo '<tr>';
            for ($j = 1; $j <= $sutun_sayisi; $j++) {
                $random_sayi = rand(1, 100);
                echo '<td>' . $random_sayi . '</td>';
            }
            echo '</tr>';
        }
        echo '</table>';
    } else {
        echo 'Lütfen geçerli bir satır ve sütun sayısı girin.';
    }
}
?>

</body>
</html>
