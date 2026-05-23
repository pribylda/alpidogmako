# Alpidog Mako 🐾

Oficiální webová prezentace rodinné chovatelské stanice stafordšírských bulteriérů z Plzně. 

Web slouží k představení chovné stanice, informování o plánovaných i proběhlých odchovech štěňat a poskytnutí jednoduchého kontaktu pro zájemce.

## 🚀 Technologie (Tech Stack)
* **Frontend:** HTML5, CSS3
* **Backend:** PHP 8
* **Architektura:** Modulární struktura pomocí PHP includes (sdílená hlavička a patička)
* **Server:** Apache (optimalizováno pomocí `.htaccess` pro čisté URL adresy a vynucení HTTPS)

## ⚙️ Lokální spuštění (Pro vývojáře)
Pro spuštění projektu na lokálním prostředí:
1. Nainstaluj [XAMPP](https://www.apachefriends.org/).
2. Naklonuj tento repozitář do složky `C:\xampp\htdocs\alpidogmako`.
3. V XAMPP Control Panelu zapni modul **Apache**.
4. V prohlížeči otevři adresu: `http://localhost/alpidogmako`

## 📂 Základní struktura
* `/includes` - Sdílené PHP komponenty (header.php, footer.php)
* `/css` - Styly webu
* `/images` - Fotografie a grafické podklady
* `/odchovy` - Záznamy o jednotlivých vrzích
* `index.php` - Hlavní vstupní bod aplikace
* `.htaccess` - Pravidla pro routování a bezpečnost

## 👨‍💻 Autor
**David Přibyl** - Vývoj a správa webu