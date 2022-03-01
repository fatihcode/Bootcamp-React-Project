# React Router Örneği

Bu Projede, tek sayfalık bir uygulamayı görüntülemek için yönlendiricileri kullanacaksınız.
Başlayalım!

Halihazırda çalışan bir React yolunuz varsa (veya yeni bir tane oluşturduysanız):
Reaksiyon-yönlendirici-dom'u şu komutla kurun: npm install --save tepki-yönlendirici-dom
Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start

Hedefleriniz;
• Herhangi bir gezinme öğesine (Ana Sayfa, Hakkında, Mesajlar) tıkladığınızda bu sayfa açılmalıdır.
• Mesajlar sayfasında bir mesaja tıkladığınızda bu mesaj gösterilecektir.

ADIMLAR:

App.js dosyanızda; başlığı bitirdikten sonra “menü” adında bir `<div>` sınıfı oluşturun. Div içinde, liste öğeleri oluşturun ve bağlantılar oluşturmak için `<Link>` öğesini kullanın; Ana Sayfa “/”, Hakkında “/about”, Mesajlar “/mesajlar”.

Tarayıcı sekmenize bakın, bir öğeyi tıkladığınızda şuna benzer öğeler bağlantısı görmelisiniz: “http://localhost:3000/messages”

Bileşenler klasörünün içinde “Ev”, “Hakkında” ve “Mesajlar” adlarıyla 3 bileşen oluşturun.

“Ana Sayfa” bileşeni, “Bu benim Ana Sayfam!” Gibi bir cümle döndürmelidir.

"Hakkında" bileşeni, "Bu benim Hakkında sayfam!" gibi bir cümle döndürmelidir.

“Mesajlar” bileşeni, “Bu benim Mesajlarım sayfam!” Gibi bir cümle döndürmelidir.

Şimdi; "menü"den sonra "Uygulama-intro" adlı başka bir div sınıfı oluşturun. Bu div içinde, bu bileşenleri `<Route/>` öğeleriyle çağırın. Rota öğelerinizi bir `<Routes>` öğesiyle sarın.
Sayfanıza bakın düzgün çalışması lazım

Kullanıcı doğrudan tarayıcı sekmesine adres yazarsa veya yanlış bağlantı yazarsa, örneğin: http://localhost:3000/mess ; Boş sayfa gösteriyor.
Rota Ekle;
İpucu:
<Route path="*" element={<Bulunamadı />} />

Bu sefer, bileşenler klasörü içinde “Hata 404! Sayfa Bulunamadı” ve ana sayfa için “/” için bir `<Link>` öğesi.

İç İçe Rotalar:
9.
Bir bileşen içinde başka bir rota oluşturacağız.
Anahtar niteliklere sahip farklı mesajlar için liste öğeleri oluşturun, anahtarlar için farklı değerler verin.
İPUCU:

<li key="1">Mesaj Numarası - 1 </li>
      <li key="2">Mesaj Numarası - 2 </li>
      <li key="3">Mesaj Numarası - 3 </li>

Her liste öğesini bir Link öğesinde “/messages/KEY VALUE” olarak sarın.

Aşağıdaki adımlarda yaptığımız gibi farklı mesajlar için farklı bileşenler oluşturabiliriz. Ancak, anahtar değeri kullanarak tek bir bileşenle de işleyebiliriz.
Routes öğesiyle bir Route öğenizi oluşturun. ”/messages/:id” yolunu ve Mesaj bileşenini kullanın (bir sonraki adımı oluşturacağız)

Şimdi bir message.js dosyası oluşturun ve bir fonksiyon oluşturun.
let params = useParams();
Bir `<h3>` öğesi içinde bir dize döndür "Bu ileti, ileti kimliğinden geliyor { params.id}"
eşleşme parametreleri nedir

useParams:
Bunu tepki-yönlendirici-dom kullanarak yapmak kolaydır. Kitaplık, oluşturulan her rotaya useParams adlı bir destek içinde geçer. Bu, anahtarın rotayı oluştururken belirttiğimiz ad olduğu ve değerin URL'deki gerçek değer olduğu tüm eşleşen parametreleri tutar.

Params nesnesini görmek istiyorsanız, `<h3>` öğesinden önce “params” için bir konsol yazın ve inceleyin.

Şimdi, her bir mesaj bağlantısını tıkladığınızda, bir kimliğe sahip farklı bir mesaj görünür.
Tebrikler! Bir sonraki adıma devam edin.

AFERİN!

---

# React Router Example

In this Project you will use routers to display a one page application.

Let’s get started!

**If you have a working React path already (or you just created a new one):**

```
Install react-router-dom with the command : npm install --save react-router-dom
```

Change your original “src” folder with the Project’s “src” and run your application: npm
start

Your goals are;

·
When you click any navigation item (Home, About, Messages) this page should open.

·
In Messages page, when you click a message, this message will shown.

**STEPS:**

**1.**

In your App.js file; after finishing headercreate a `<div>` classnamed “menu”. Inside div, create list items and use `<Link>` element to making links; Home to “/”, About to “/about”, Messages to “/messages”.

Look at your browser tab, when you click an item you should see items link like: “http://localhost:3000/messages”

**2.**

Inside components folder, create 3 components with the names of “Home”, “About”
and “Messages”.

**3.**

“Home” component should return a sentence like “This is my Home page!”

**4.**

“About” component should return a sentence like “This is my About page!”

**5.**

“Messages” component should return a sentence like “This is my Messages page!”

**6.**

Now; after “menu” Create another div classnamed“App-intro”. Inside this div, call
this components with the `<Route/>` elements. wrap your Route elements with a `<Routes>` element.

Look at your page it should work properly

**7.**

If, user writes address directly to the browser tab or writes wrong link for
example: http://localhost:3000/mess ; It shows blank page.

Add a Route;

Hint:

<Route path="*"element={`<NotFound />`} />

**8.**

This time, create a Notfound component inside components folder, that returns
“Error 404! Page Not Found” and “a `<Link>` element to the “/”, for home page.

**Nested
Routes:**

**9.**

We will create another route inside one component.

Create list items for different messages with key attributes, give different values for keys.

HINT:

<li key="1">Message Number - 1 </li>

    `<li key="2">`Message Number - 2 `</li>`

    `<li key="3">`Message Number - 3 `</li>`

Wrap each list item in
a Link
element to “/messages/KEY VALUE”.

**10.**

We can create different components for different messages like we did below
steps. But, we can handle with one component also, by using the key value.

Create your one Route element with Routes element. Use path to ”/messages/:id” and component to Message (we will create next step)

**11.**

Now, create a message.js file and create a function.

letparams=useParams();

Return a string within
a `<h3>`
element “This message is coming from
message ID { params.id}“

What is match params

**useParams:**

*This is easy to do using
react-router-dom . The library passes in a prop called useParams into every
route that is rendered. This holds all matching params where the key is the name
we specified when creating the route and the value is the actual value in the
URL*

If you want to see
params object, write a console for “params” before `<h3>` element and
inspect.

**12.**

Now, clicking each message link, it appears different message with an id.

**Congragulations! Keep
on next step.**

WELL DONE!
