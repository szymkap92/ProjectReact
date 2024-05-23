import React from "react";
import styles from "./Raty.module.css";
import raty1 from "../../assets/raty1.png";
import raty2 from "../../assets/raty2.png";
import raty3 from "../../assets/raty3.jpg";
import raty4 from "../../assets/raty4.jpg";

export function Raty() {
  return (
    <div className={styles.container}>
      <div className={styles.centeredSection}>
        <h2>ZAKUPY NA RATY W KONESSO.PL</h2>
        <img src={raty3} alt="Zakupy na raty" className={styles.largeImage1} />

        <p className={styles.smallText}>
          W sklepie Konesso.pl masz do wyboru wiele metod płatności, a jedną z
          nich jest zakup na raty. Zakupy ratalne w Konesso.pl to rewelacyjny
          sposób na szybkie zakupy z wygodną płatnością, ale najlepsze jest to,
          że to Ty ustalasz ilość rat, które będziesz spłacać. Dzięki temu
          spłata nigdy nie będzie dla Ciebie problemem.
        </p>
        <p className={styles.smallText}>
          W naszym sklepie możesz skorzystać z zakupów na raty z Credit Agricole
          Raty oraz eRaty Santander. Każda z tych opcji to bardzo wygodne
          rozwiązanie, gdy nie chcesz ponosić całych kosztów zamówienia za
          jednym razem.
        </p>
      </div>

      <h2 className={styles.sectionTitle}>CREDIT AGRICOLE RATY</h2>
      <div className={styles.flexContainer}>
        <img src={raty4} alt="Credit Agricole" className={styles.largeImage3} />
        <p className={styles.smallText}>
          <strong>
            Aby skorzystać z rat 0% w Banku Credit Agricole, w zamówieniu może
            znajdować się wyłącznie<br></br> urządzenie (np. ekspres lub młynek)
          </strong>
          . Zwróć też uwagę, że raty w tym Banku przyznawane są do zamówień{" "}
          <br></br>o minimalnej wartości 300 zł.<br></br>
          Jeśli chcesz dodać do zamówienia dodatkowe produkty, np. kawę lub
          środki konserwujące - złóż odrębne<br></br> zamówienie lub poczekaj na
          akceptację wniosku.
        </p>
      </div>
      <p className={styles.smallText}>
        Zwykle czas weryfikacji wniosku ratalnego przez Bank nie zajmuje więcej
        niż 2 dni robocze. Niezwłocznie po <br></br>otrzymaniu od banku
        informacji o zatwierdzeniu kredytu, skontaktujemy się z Tobą - wtedy
        potwierdzimy<br></br>
        warunki dostawy, ustalimy sposób uiszczenia wpłaty własnej (jeśli ją
        zadeklarowałeś) a także będziemy mogli<br></br> dodać wybrane przez
        Ciebie, dodatkowe produkty do zamówienia. Nasi pracownicy z
        przyjemnością pomogą<br></br>
        sfinalizować zamówienie i są do twojej dyspozycji na każdym etapie.
      </p>
      <img src={raty1} alt="Credit Agricole" className={styles.largeImage} />

      <h2 className={styles.infoTitle}>
        <strong>WAŻNE INFORMACJE:</strong>
      </h2>
      <ul className={styles.infoList}>
        <li className={styles.smallText}>
          Obowiązuje kategorie ekspresy do kawy, młynki do kawy.
        </li>
        <li className={styles.smallText}>
          Zakupy z Credit Raty są możliwe wyłącznie od kwoty 300 zł.
        </li>
        <li className={styles.smallText}>
          Okres spłaty pożyczki może wynieść od 3 do 38 miesięcy.
        </li>
        <li className={styles.smallText}>
          Wniosek o przyznanie pożyczki weryfikuje bank Credit Agricole.
        </li>
      </ul>

      <h2>ERATY SANTANDER</h2>
      <p className={styles.smallText}>
        Zakupy przy pomocy eRaty Santander są bardzo przyjemne, a co
        najważniejsze obowiązują wszystkie towary z oferty naszego sklepu o
        minimalnej wartości 100 zł.<br></br> Żeby dokonać zakupu na raty z
        Santander wystarczy przejść kilka prostych kroków.
      </p>
      <img src={raty2} alt="eRaty Santander" className={styles.largeImage2} />

      <h2 className={styles.infoTitle2}>
        <strong>WAŻNE INFORMACJE:</strong>
      </h2>
      <ul className={styles.infoList2}>
        <li className={styles.smallText}>
          Obowiązuje wszystkie produkty z oferty sklepu Konesso.pl.
        </li>
        <li className={styles.smallText}>
          Zakupy z eRaty Santander są możliwe wyłącznie od kwoty 100 zł.
        </li>
        <li className={styles.smallText}>
          Okres spłaty pożyczki może wynieść od 6 do 48 miesięcy.
        </li>
        <li className={styles.smallText}>
          Wniosek o przyznanie pożyczki weryfikuje bank Santander Consumer Bank.
        </li>
      </ul>

      <h2 className={styles.centerAlign}>
        PODZIEL SIĘ SWOIM KOMENTARZEM Z INNYMI
      </h2>

      <div className={styles.newsletter}>
        <h3>ZAPISZ SIĘ NA NEWSLETTER</h3>
        <form className={styles.newsletterForm}>
          <input type="text" placeholder="Wpisz imię" className={styles.inputField} />
          <input type="email" placeholder="Wpisz adres email" className={styles.inputField} />
          <button type="submit" className={styles.submitButton}>Zapisz się</button>
          <button type="button" className={styles.unsubscribeButton}>Wypisz się</button>
        </form>
        <div className={styles.clause}>
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">Wyrażam zgodę na przetwarzanie moich danych osobowych.</label>
        </div>
      </div>
    </div>
  );
}
