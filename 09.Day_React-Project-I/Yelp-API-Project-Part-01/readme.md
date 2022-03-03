# REACT İLE ÖN UÇ UYGULAMALARI OLUŞTURMA

Yelp benzeri bir klon olan bir web sitesi oluşturmanın ilk bölümüne hoş geldiniz.(www.yelp.com). Projemizin ne olabileceğine dair bir fikir edinmek istiyorsanız, Yelp web sitesini ziyaret edin ve bölgenizdeki restoranları arayın.

Ayrıca, örnek çalışma projesini buradan kontrol edebilirsiniz.

Toplamda, bu proje dört bölümden oluşacaktır:
• Statik Bileşenler Oluşturma
• Bileşenlere Bilgi Aktarma
• Bileşenlerin Durumunu Ayarlama
• Yelp API ile Etkileşim

Dört adım, tamamı Yelp benzeri bir klon oluşturmak amacıyla JavaScript ve React bilginizi test edecek.

Apollo'nun nasıl çalışması gerektiğine dair hızlı bir genel bakış:
• Bir kullanıcı olarak restoran arayabilmeliyim.
• Bir kullanıcı olarak Yelp API tarafından döndürülen restoranların listesini görüntüleyebilmeliyim.
• Bir kullanıcı olarak, bir filtre kullanarak restoranları sıralayabilmeliyim.

Bugün, ilk bölümü oluşturarak başlayacaksınız: Statik Bileşenler Oluşturma.
Başlayalım!

Bilgisayarınızdaki create-react-app paketini kullanarak bir React uygulaması oluşturarak başlayın. tercih edilen terminal Uygulamanıza bir isim verin, mayınlar Apollo.

Terminal penceresinde, Apollo dizininde aşağıdaki komutu yazın: npm start

public/favicon.ico'da bulunan mevcut favicon'u Project klasörünüzdeki simgeyle değiştirin. Yeni resmi favicon.ico olarak kaydettiğinizden emin olun.

Varsayılan olarak create-react-app, örnek bir uygulama oluşturur. Uygulamamızın her tarayıcıda aynı şekilde tasarlandığından emin olmak için bir reset.css dosyası eklememiz gerekecek.

Size gönderilen Proje klasörüne bir göz atın. Reset.css dosyasını reaksiyon uygulamasının public/ dizinine kopyalayın.

Public/ dizininde de bulunan index.html dosyasındaki reset.css bağlantısı. index.html'yi açık tutun.

Ayrıca, uygulamanın kullanacağı birkaç Google yazı tipi eklemeniz gerekecek. Gerekli Google yazı tiplerini eklemek için index.html'de aşağıdaki bağlantıları ekleyin:
`<link href="https://fonts.googleapis.com/css?family=Work+Sans:300,500,600" rel="stylesheet">`
`<link href="https://fonts.googleapis.com/css?family=Poppins:600" rel="stylesheet">`

Harika, şimdi gerçek bir React koduna geçelim! Apollo, birbiriyle etkileşime giren dört farklı bileşenden oluşacak:
• <İş />
• <İş Listesi />
• <Arama Çubuğu />
• `<App />` (varsayılan olarak create-react-app ile oluşturulur)

Bu projede dört bileşeni tek tek oluşturacaksınız. İlk olarak, src/ dizini içinde component adında yeni bir klasör oluşturun. Tüm bileşenlerinizi bu dizinde depolayacaksınız.

Her bileşenin component/ içinde kendi klasörü olmalıdır. Bileşenlerin/ dizinin içinde, App adlı yeni bir klasör oluşturun.

App.js ve App.css dosyasını App/ klasörüne taşıyın ve index.js içindeki yolu buna göre güncelleyin.

Bu projede kullanmayacağınız için App.test.js dosyasını src/ klasöründen silin.

Ardından `<Business />` bileşenini oluşturalım.
Bileşenler/ içinde, Business adlı yeni bir klasör oluşturun. Bu dizin altında iki dosya oluşturun:
• Business.js
• Business.css

Harika! Artık ilk React bileşeninizi oluşturmaya başlamaya hazırsınız. <İş /> bileşeninin amacı, Apollo'daki bir işletmenin (bir restoranın) nasıl biçimlendirileceğini ve stilinin nasıl olacağını temsil etmektir.

Şimdilik, tek bir işletme girişini sabit kodlayacağız. Daha sonra Yelp API'sini kullanarak dinamik olarak güncelleyeceksiniz.

Metin düzenleyicinizde Business.js'yi açın. İş adında bir JavaScript nesnesi oluşturun. Aşağıdaki anahtarları ve değerleri kopyalayın ve işletmeye ekleyin:

imageSrc: ./pizza.webp',
isim: 'MarginOtto Pizzeria',
adres: '1010 Paddington Yolu',
şehir: 'Flavortown',
durum: 'NY',
posta Kodu: '10101',
kategori: 'İtalyan',
değerlendirme: 4.5,
incelemeSayı: 90

Not: “pizza.webp” dosyasını public/ klasörünüze kopyalayın.

Ardından, iş nesnesinin altında, İş adlı bir React bileşeni oluşturun.

.the business nesnesinin içinde bu HTML'yi döndürür.:

<div className="İşletme">
      <div className="image-container">
        <img kaynağı={imageSrc} alt={kategori}/>
      </div>
      <h2>{name}</h2>
      <div className="İş bilgileri">
        <div className="İş adresi">
          <p>{adres}</p>
          <p>{şehir}</p>
          <p>{state} {zipCode}</p>
        </div>
        <div className="İşletme incelemeleri">
          <h3>{kategori}</h3>
          <h3 className="rating">{rating} yıldız</h3>
          <p>{reviewCount} inceleme</p>
        </div>
      </div>
    </div>

• Bir sonraki adımda iş bileşenine stil eklemek için kullanacağımız için sınıf değerlerini değiştirmeyin.
• İlgili bilgileri iş nesnesindeki (yani {business.thisProperty}) özelliklere yapılan referanslarla değiştirin.

İş bileşenindeki HTML öğelerine bir grup className özniteliği eklediniz, ancak bu öğeleri CSS ile stillendirmezsek çok kullanışlı olmayacaklar!
Business.css dosyasını Business/ dizinine kopyalayın.

Business.js'nin en üstünde (2. satır), Business.css dosyasını içe aktarın.

Bileşenler/ dizinde, BusinessList adlı başka bir klasör oluşturun. BusinessList'in içinde iki dosya oluşturun:
• BusinessList.js
• BusinessList.css

Aşağıdaki CSS'yi BusinessList.css'ye ekleyin:
BusinessList.css:
BusinessList {
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 4.4rem 10%;}

`<BusinessList />` bileşeninin amacı, döndürülen işletmeler listesinin nasıl görüneceğini simüle etmektir. `<Business />` bileşenini kullanmak için `<Business />` bileşenini içe aktarmanız gerekir.

BusinessList adlı bir bileşen oluşturun.

render() yönteminin içinde, className “BusinessList” div öğesiyle bir return ifadesi ekleyin. Ve `<Business />` bileşenini döndür

BusinessList bileşeni için bu kadar! Bu liste bileşeninin başka bir bileşen tarafından yeniden oluşturulması gerekecek, bu yüzden onu dışa aktarmanız gerekecek. Dosyanın altında BusinessList'i dışa aktarın.

Apollo'da işletmeleri (restoranları) aramak için bir arama çubuğuna ihtiyacınız olacak. Bunu bir SearchBar bileşeniyle uygulayacağız.
Bileşenler/ dizinde SearchBar adlı başka bir klasör oluşturun.

SearchBar'ın içinde iki dosya oluşturun:
• SearchBar.js
• SearchBar.css

SearchBar.css dosyasını klasöre kopyalayın. Proje için de ihtiyacınız olacak iki resim var.
Yazdığınız tüm medya sorgularında “mobil” sürüm kullanılmalıdır.

Arama çubuğu, kullanıcıların işletmeleri şu şekilde aramasına izin vermelidir:
• En iyi eşleşme
• En yüksek dereceli
• En Çok İncelenenler

Bunu başarmak için, API'nin almayı beklediği şeye uyan anahtarlar ve değerler içeren bir nesne oluşturacaksınız (yukarıda sağlanan belgelerde gösterildiği gibi). Bunun neye benzediğini görelim.
sortByOptions adlı bir nesne oluşturarak başlayın.

Nesnenin üç anahtarı olmalıdır (bu sırayla):
• En iyi eşleşme
• En yüksek dereceli
• En Çok İncelenenler
Anahtarların stirng olduğundan emin olun.

Ardından, değerleri ayarlayın. Bu anahtarların değerlerini ayarlamanıza yardımcı olması için belgeleri kullanın. “Parametreler” tablosuna bakın; “sort_by” girişi yardımcı olacaktır. Değerler string olmalıdır. (İPUCU: best_match, derecelendirme, inceleme_sayısı veya mesafe)

Arama çubuğu bileşenini oluşturmaya başlayalım. SearchBar adlı bir bileşen oluşturun.

Bileşen bildiriminin gövdesinde renderSortByOptions() adlı bir yöntem oluşturun.

renderSortByOptions() işlevinin amacı, sıralama seçeneklerini (En İyi Eşleşme, En Yüksek Dereceli, En Çok İncelenen) görüntülemek için gereken liste öğelerini dinamik olarak oluşturmaktır.
Yöntem, sortByOptions nesnesinin anahtarlarını ve değerlerini yinelemeli ve bir liste öğesi döndürmelidir. Onu oluşturmaya başlayalım. Bir iade ifadesi ekleyin.

Nesneyi yinelemek için sortByOptions nesnesinin anahtarlarına erişerek başlamanız gerekir. JavaScript Nesne kitaplığında keys() yöntemini çağırın.

Artık anahtarlara erişiminiz olduğuna göre, map() yöntemini kullanarak bunlar arasında yineleyin. Geri arama işlevi, sortByOption adlı bir parametreye sahip olmalıdır.

Şimdi nesne değerlerini daha fazla kullanım için bir değişkende saklayalım. map() yöntemi geri çağırma işlevinin içinde, değerleri sortByOptionValue adlı bir değişkende saklayın.

map() metodu içerisinde; sonraki satırda bir `<li>` öğesi döndürün. Liste öğesinin, sortByOptionValue olarak ayarlanmış anahtar adlı bir özniteliği olmalıdır.
Liste öğesinin içeriği sortByOption olmalıdır.

Harika, renderSortByOptions() ile işiniz bitti! Arama çubuğu bileşeninin yapısını oluştururken bu yöntemi kullanacaksınız.

`<SearchBar />` bileşeninin yapısını oluşturalım.
.render() yönteminin içine, bu HTML'yi işleyen JSX ile bir dönüş ifadesi ekleyin.

<div className="Arama Çubuğu">
        <div className="Arama Çubuğu sıralama seçenekleri">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="Arama Çubuğu-alanları">
          <input placeholder="İşletmeleri Ara" />
          <input placeholder="Nerede?" />
        </div>
        <div className="Arama Çubuğu-gönder">
          <a href='www.#.com' >Gidelim</a>
        </div>
      </div>

Tüm bileşenleri bir araya getirmenin zamanı geldi!
App.js dosyasını varsayılan App/ dizininde açın.
App.css dosyasını Project klasörüne koyduğunuzdan emin olun.

Önce `<BusinessList />` ve <SearchBar/ > bileşenlerini içe aktarmanız gerekir.

App.js .render() yönteminin içinde, className "App" olan bir div döndürün. Insdie bu div `<BusinessList />` ve <SearchBar/ > bileşenlerinizi çağırır.

Tebrikler! Apollo projesinin ilk bölümünü tamamladınız. Ne inşa ettiğinizi kısaca gözden geçirelim:

• Tek bir işi simüle eden bir İş bileşeni.
• Tek işletmelerin listesini simüle eden bir BusinessList bileşeni.
• Gelecekte iş aramak için kullanılacak bir SearchBar bileşeni.
Uygulama bileşeni, bir SearchBar bileşeni ve bir BusinessList bileşeni oluşturur.

Nihai ürün, Apollo projesinin nasıl görüneceğini ve çalışacağını gösteren bir simülasyondur. Bazı işlevler (Yelp API'sini sorgulamak gibi) şu anda eksik, ancak sonraki adımlarda oluşturacaksınız.

---

# BUILDING FRONT-END APPLICATIONS WITH REACT

Welcome to the first part of building a website, a Yelp-like clone. ([www.yelp.com](http://www.yelp.com)). If you want to get a feel for what our project can be, visit the Yelp website and search for restuarants in your area

Also, you can check sample working project [here](https://jkey774.github.io/codecademy-ravenous/).

In total, there will be four parts to this project:

* Creating Static Components
* Passing Information to Components
* Setting the State of Components
* Interacting with the Yelp API

The four steps will test your knowledge of JavaScript and React, all with the goal
of building a Yelp-like clone

Here’s a quick overview of how Apollo should function:

* As a user, I should be able to search
  for restaurants.
* As a user, I should be able to view a
  list of restaurants returned by the Yelp API.
* As a user, I should be able to sort
  through restaurants using a filter.

Today, you will start by building the first part: Creating Static Components.

Let’s get started!

Start by creating a React app using the create-react-app package in your preferred terminal. Give a name of your app, mines is Apollo.

In terminal window, at the Apollodirectory, type the following command: npm start

Replace the current favicon located at public/favicon.ico with the icon in your Project folder. Make sure you save the new image as favicon.ico.

By default, create-react-app will generate a sample application. We’ll need to add a reset.css file to ensure our app is styled the same in every browser.

Take a look at the Project folder sended to you. Copy reset.css in to the public/ directory of react-app.

Link to reset.css inside index.html file that’s also located in the public/ directory. Keep index.html open.

You’ll also need to add a couple of Google fonts that the app will use. In index.html, add the following links, to add the necessary Google fonts:

`<link href="https://fonts.googleapis.com/css?family=Work+Sans:300,500,600" rel="stylesheet">`

`<link href="https://fonts.googleapis.com/css?family=Poppins:600" rel="stylesheet">`

Great, now let’s move on to some actual React code! Apollo will be composed of four
different components interacting with each other:

• `<Business />`

• `<BusinessList />`

• `<SearchBar />`

• `<App />` (created by default with create-react-app)

You’ll create all four components in this project, one by one. First, inside the src/ directory create a new folder called components. You’ll store all of your components in this directory.

Each component should have its own folder inside of components/. Inside of the components/ directory create a new folder called App.

Move App.js and App.css to the App/ folder and update the path in index.js accordingly.

Delete App.test.js from the src/ folder, as you will not use it in this project.

Next, let’s create the `<Business />` component.

Inside components/, create a new folder called Business. Under this directory create
two files:

• Business.js

• Business.css

Great!
Now you’re ready to begin creating your first React component. The purpose of
the `<Business />` component is to represent how a business (a restaurant) in Apollo will be formatted and styled.

For now, we’ll hard code a single business listing. Later, you’ll update it dynamically using the Yelp API.

Open Business.js in your text editor. Create a JavaScript object called business.
Copy the following keys and values and add them to business:

imageSrc: ./pizza.webp',

name: 'MarginOtto Pizzeria',

address: '1010 Paddington Way',

city: 'Flavortown',

state: 'NY',

zipCode: '10101',

category: 'Italian',

rating: 4.5,

reviewCount: 90

Note:
Copy “pizza.webp” file to your **public/** folder.

Next, below the business object, create a React component called Business.

Inside of the .the business object return this HTML.:

<div className="Business">

    `<div className="image-container">`

    <img src={imageSrc} alt={category}/>

    `</div>`

    `<h2>`{name}`</h2>`

    `<div className="Business-information">`

    `<div className="Business-address">`

    `<p>`{address}`</p>`

    `<p>`{city}`</p>`

    `<p>`{state} {zipCode}`</p>`

    `</div>`

    `<div className="Business-reviews">`

    `<h3>`{category}`</h3>`

    `<h3 className="rating">`{rating} stars `</h3>`

    `<p>`{reviewCount} reviews `</p>`

    `</div>`

    `</div>`

    `</div>`

• Do
not change the class values, as we will use them
in the next step to add style to the business component.

• Replace
the relevant information with references to properties in the business object
(i.e. {business.thisProperty}).

You added a bunch of className attributes to the HTML elements in the Business component, but they won’t be very useful if we don’t style those elements with CSS!

Copy Business.css file into the Business/ directory.

At the top of Business.js (line 2), import the Business.css file.

In the components/ directory, create another folder called BusinessList. Inside of BusinessList, create two files:

• BusinessList.js

• BusinessList.css

Add the following CSS to BusinessList.css:

BusinessList {

display: flex;

justify-content: space-around;

flex-wrap: wrap;

margin: 4.4rem 10%;}

The point of the `<BusinessList />` component is to simulate what a returned list of businesses would look like To use the `<Business />` component, you’ll have to import `<Business />` component.

Create a component called BusinessList.

Inside render() method, add a return statement with a div element className “BusinessList”. And return `<Business />` component

That’s it for the BusinessList component! This list component will need to be rendered again by another component, so you’ll need to export it. At the bottom of the file,
export BusinessList.

To search for businesses (restaurants) in Apollo, you’ll need a search bar. We’ll
implement this with a SearchBar component.

In the components/ directory, create another folder called SearchBar.

Inside of SearchBar, create two files:

• SearchBar.js

• SearchBar.css

Copy SearchBar.css file in to the folder. There are two images you’ll need for the Project also.

The“mobile” version should be used in any media queries you write.

Search bar should allow users to search businesses by:

• Best Match

• Highest Rated

• Most Reviewed

To achieve this, you’ll create an object with keys and values that conform to what
the API expects to receive (as shown in the documentation provided above).
Let’s see what this looks like.

Start by creating an object called sortByOptions.

The object should have three keys (in this order):

• Best Match

• Highest Rated

• Most Reviewed

Make sure the keys are strings.

Next, set the values. Use [the documentation](https://www.yelp.com/developers/documentation/v3/business_search)to help you set the values of those keys. Look at the table of “Parameters”; “sort_by” entry will be helpful. The values should be
strings. (HINT: best_match,
rating, review_count or distance)

Let’s start building the search bar component. Create a component called SearchBar.

Create a method called renderSortByOptions()in the body of the component declaration.

The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed).

The method should iterate through the keys and values of the sortByOptions object and return a list item. Let’s start building it out. Add a return statement.

To
iterate through the object, you’ll need to start by accessing the keys of the sortByOptions object. Call the keys() method on the JavaScript Object library.

Now
that you have access to the keys, iterate through them using the map() method. The callback function should have one parameter called sortByOption.

Now let’s store the object values in a variable for further usage. Inside of the map() method callback function, store values in a variable called sortByOptionValue.

Inside
map() method; on the next line,
return a `<li>` element.
The list item should have an attribute called key
set to sortByOptionValue.

The
content of the list item should be sortByOption.

Great,
you’re done with renderSortByOptions()!
You’ll use this method when building the structure of the search bar component.

Let’s
build the structure of the `<SearchBar />` component.

Inside
of the .render()
method, add a return statement with JSX that renders this HTML.

<div className="SearchBar">

    `<div className="SearchBar-sort-options">`

    `<ul>`

    {this.renderSortByOptions()}

    `</ul>`

    `</div>`

    `<div className="SearchBar-fields">`

    `<input placeholder="Search Businesses" />`

    `<input placeholder="Where?" />`

    `</div>`

    `<div className="SearchBar-submit">`

    `<a href='www.#.com' >`Let's Go `</a>`

    `</div>`

    `</div>`

It’s
time to put all of the components together!

Open
the App.js file
in the default App/ directory.

Make
sure to put App.css file
to Project folder.

You’ll
need to import the `<BusinessList />` and <SearchBar/ >
components first.

Inside
of the App.js .render() method, return a div with a className “App”.
Insdie this div call your `<BusinessList />` and <SearchBar/ >
components.

Congratulations!
You completed the first part of the Apollo project. Let’s briefly review what
you built:

• A Business component
that simulates a single business.

• A BusinessList component
that simulates a list of single businesses.

• A SearchBar component
that will be used in the future to search for business.

The App component
renders a SearchBar
component and a BusinessList component.

The
final product is a simulation of
how the Apollo project will look and work. Some functionality (like querying
the Yelp API) is currently missing, but you’ll build it in the upcoming steps.
