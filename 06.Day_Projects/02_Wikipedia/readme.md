Tepki Wikipedia Araması

Bu Projede istediğiniz herhangi bir şeyi aramak için wikipedia api'yi kullanacaksınız.
Başlayalım!

Halihazırda çalışan bir React yolunuz varsa (veya yeni bir tane oluşturduysanız):
Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start

Hedefleriniz;
• Bir şey girip butona bastığınızda wikipedia'dan en az 10 sonuç gelmelidir.
• Yalnızca işlev bileşenlerini ve durumları da kullanın.

ADIMLAR:

`https://en.wikipedia.org/w/api.php?action=opensearch&search=SEARCH-WORD&format=json&origin=*&limit=10`

App.js dosyanızda; Uygulama işlevi bileşeninin içinde, wikipedia'dan veri almak için bu url'yi kullanın. HandleData() yardımcı işlevi oluşturun.

Form bileşeninizden “form.js” dosyasından “SEARCH-WORD” alın.

App.js dosyanızda dönen verilere göre; wikipedia sonuçlarını DOM'a listeleyin.

Tebrikler!

---

**React Wikipedia Search**

In this Project you will use wikipedia api to search anything you want.

Let’s get started!

**If you have a working React path already (or you just created a new one):**

Change your original “src”folder with the Project’s “src” and run your application: npm start

Your goals are;

When you enter something and hit the button, at least 10 results should come from wikipedia.

Use function components only and states also.

**STEPS:**

**1.**

`https://en.wikipedia.org/w/api.php?action=opensearch&search=SEARCH-WORD&format=json&origin=*&limit=10`

In your App.js file; inside App function
component use this url to fetch data from wikipedia. Create handleData() helper
function.

**2.**

Take “SEARCH-WORD” from your form component from “form.js” file.

**3.**

In your App.js file, according to the returning data; list wikipedia results to
the DOM.

Congragulations
