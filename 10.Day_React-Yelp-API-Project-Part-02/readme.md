**APOLLO PROJESİ BÖLÜM-2**

İçinde Bugün nasılsın proje, yapacaksın tamamlamak en saniye Apollo'nun bir parçası :  

**Bileşenlere Bilgi İletmek . ** _

Şimdiye kadar , zor kodladınız işletme bilgi ve manuel olarak oluşturdu . Şimdi kuyu bilginin nasıl olduğuna odaklanın ( gibi işletme bilgi ) geçebilir itibaren bileşen ile bileşen ile birlikte daha az sert kodlama Bu çok önemli çünkü biz yapı karşı en Yelp
benzeri bir yapı oluşturma hedefi klon .

**Elde etmek Başladı

****1. **

Terminal penceresinde , gidin _ içine proje
dizini _ ve npm başlangıç bir geliştirme sunucusu başlatmak ve açık senin bir
önizlemesini yukarı _ bir tarayıcı sekmesinde uygulama .

**Yaratmak işletmeler Dizi

****2. **

Ne zaman en Yelp API uygulandı , işletmelerin bir listesi iade edilecek _ ile  **Uygulama.js ** . Bu nedenle , açık  **Business.js ** . Kesmek en bütün işletme nesne ve içine yapıştır _ **Uygulama.js **emin olun _ doğru yapıştır _ sonrasında en ithalat ve üstünde en Uygulama sınıf beyan .

Gitmek geri ile  **Uygulama.js ** . altında _ işletme nesne , bir iş yaratmakdizi . bu dizi olmalı tutmak altı Referanslar ile en işletme nesne .

**İş Listesi Ayarlama Prop

****3. **

İçinde  **app.js ** , bir işletme ekleyin Emlak ile en < BusinessList / > bileşeninin içindeki render ( ) yöntemi . ayarla _ Emlak eşit ile en işletmeler dizi . ( Yapma unutmak senin Kıvırcık parantez !)

**Ekle işlevsellik ile en İş Listesi Prop

****4. **

**BusinessList.js'yi **açın , _ İş Listesi div, erişim en işletmeler pervane ve aramak en . map () metodu üzerinde.

**5. **

İçinde _ map () yöntemi , bir geri arama ilet işlev ile birlikte 1 parametre isminde iş .

 **6 **

. geri çağırmak işlev meli bir `<Business />` bileşeni döndürün . bu iade <İş / > bir mülke sahip olmak isminde iş. ayarla _ Emlak eşit ile en parametresi _ _ geri çağırmak işlev . ( Yapma unutmak senin Kıvırcık diş telleri ve noktalı virgül !)

**Business.js'yi kullanarak değiştirme Aksesuarlar

****7. **

Açık  **Business.js ** . ne yaparsın _ fark etme içindeki bilgilere nasıl erişildiği hakkında _ _ dönüş ifade ?

iş bilgileri şimdi erişilmesi gerekiyor _ _ üzerinden en işletme pervane sen gönder .

**Arama Çubuğu ekleyin Yapıcı

****8.

**Boyunca
Bugün nasılsın proje , yapacaksın İş esas olarak ayarda belirtmek, bildirmek ve taşıma belirtmek, bildirmek **SearchBar.js'deki **değişiklikler .

_ **SearchBar.js'yi
**açın . içine bir kurucu ekleyin _ Arama çubuğu bileşen _ emin olun _ geçmek en kurucu sahne ve aramak üzerinde süper
( sahne ) _ ilk çizgi
.

**9.

**İçinde _ yapıcı , ayarla devlet _ _ arama çubuğu Kullanmak bu devlet ve eşitle _ bir boşluğa _ nesne .

**10.

**Ekle üç anahtarlar ile en belirtmek, bildirmek nesne sen sadece yaratıldı . bu anahtarlar terim , konum ve _ _
_ sıralama _

Terim niyet bahsetmek ile en arama Terim içinde yer alan arama giriş , konum niyet bahsetmek ile en yer ile arama yakın itibaren en yer giriş ve _ göre sırala niyet temsil etmek en seçilmiş sıralama seçenek ile kullanın .

bu ilk 2 anahtarlar olarak ayarlanmalıdır _ boş dizeler ( ""). bu geçen anahtar olarak ayarlanmalıdır _ ' best_match ' . Bu tamamlar en yapıcı _

**Sıralama
Alın _ Seçeneğin Sınıf

****11.

**Üzerinde _ Apollon sayfa yok _ _ yol ile belirlemek Hangi seçenek oldu _ seçildi . Bu bir sorun; kuyu düzeltmek Bugün nasılsın ile yöntem oluşturma _ o İadeler en geçerli CSS sınıfı _ _ çeşit seçenekler , geri dönüş ikisinden biri ya da her biri değil 1 olduğu gibi şekillendirilmelidir _ _ _ _ seçildi .

Hareket en sortByOptions nesne ile en geçen satırı _ _ yapıcı ( ) ( bileşenin içinde ) ve yerelden değiştir _ _ _ değişken bir
üyeye _ değişken kullanarak bu . emin olun Ayrıca Güncelleme en 2 Referanslar ile sortByOptions içinde _ renderSortByOptions ( ) yöntemi ile şimdi kullanmak bu
.

Ardından
, yeni bir tane ekleyin yöntem isminde getSortByClass o kabul eder 1 parametre isminde sortByOption .

**12.

**İçeride, bir if kullanınifade ile Kontrol Eğer en belirtmek, bildirmek sortBy değeri _ eşittir _ ile en tedarik edilen parametre sortByOption . Eğer öyleyse geri dön ' aktif ' , aksi halde boş bir dönüş dizi ( "").

**Sıralama Seçeneği

****13'te

****Bir Değişikliği İşleyin . **getSortByClass ( ) döndürür en geçerli CSS
sınıfı sıralama için _ seçenek . Bu yöntem niyet ispat et sağlamada faydalı _ görsel geri bildirim ile kullanıcılar _

Peki ihtiyaç bir diğeri yöntem işe yarar _ _ ne zaman iletişim ile birlikte en Yelp API'si _ gelecek .

yeni ekle _ yöntem isminde handleSortByChange . Bilişim Teknoloji meli bir parametreyi kabul et isminde sortByOption .

**14.

**İçinde . _ handleSortByChange () , güncelleme en sıralama durumuBy _ile arama . setState () . olarak ayarla en değeri _ _ yöntem argüman .

**Bir Sıralama Seçeneğinin

Sınıf **Adını **Belirleyin 

****15.

**Bunları koyalım 2 yeni yöntemler ile iş . şuna bir göz atın _ .
renderSortByOptions () yöntemi
. yapacaksın değiştirmek en dönüş ifade o ile bir < li > öğesi döndürür bunlar 2 yeni yöntemler .:

Bir sınıfAdı ekleyinbağlanmak ile en <
li > öğesi.
Eşitle _ ile en dönüş değeri _ _ getSortByClass ( ) yöntemi . sortByOptionValue olarak iletinolarak _ argüman .

**Sıralama Seçeneği Değişikliğini **İşleme **( Tıklandığında )

****16.

**Sırada , **_ _** Güncelleme en sıralama durumu _ seçenek tıklandığında . _ _ onClick ekle _ bağlanmak ile en < li > öğesi. Eşitle _ ile handleSortByChange.bind () . ikiye geçmek _ argümanlar ile . bağla () : bu ve sortByOptionValue .

Bu niyet bize izin ver ikisi birden bağlamak ile en akım bunun değeri _( bizim gibi genellikle yapmak _ yapıcı ( ) ) değil , aynı zamanda bağlamak en akım sortByOptionValue olarak _ ilk argüman ile en yöntem aramak , sağlamak en yöntem denir _ ile birlikte en uygun değer ne zaman tıklandı .

**Bir Terimi Yönetin veya Konum ****

17.

**Apollo'yu **değiştir

** niyet Ayrıca ihtiyaç ile üstesinden gelmek değişiklikler _ _ 2 giriş elementler . Spesifik olarak , ihtiyaç ile üstesinden gelmek “ Şartlar ” ( işletmeler ) ve “ Yer ” ( konum ) değişiklikleri ile içinde arayın ).

altında
_ handleSortByChange ( ) yöntemi , ekleyin 2 yeni yöntemler :

• handleTermChange ()

• handleLocationChange ()

Her ikisi de olduğundan ilgili olacak _ ile Etkinlikler olmak tetiklenmiş , hem meli kabul Etkinlik argüman olarak .

**18.

**Her ikisinin de içi yöntemler , _ her birinin durumu giriş elemanı güncellenmelidir _ _ ile
birlikte en event.target.value'nun değeri . _

**Bir Terimi Yönetin veya Konum Değiştir ( onChange )

****19.

**Haydi kullanmak en yöntemler !

içinde _ dönüş ifadesi _ _ bileşen render( ) yöntemi , ekle onChange Öznitellikler ile her biri `<input >` element

: • _ ilk bağlanmak ile üstesinden gelmek Terim değişir .

• _ _
saniye bağlanmak ile üstesinden gelmek yer değişir .

**aramaYelp( ) içinde Uygulama Bileşeni

** **20.

** “ Hadi _ Git” düğmesi Ayrıca ihtiyaçlar ile sağlamak biraz geri bildirim türü ile en kullanıcı _ İçinde  **App.js ** , bir yöntem ekleyin isminde aramaYelp ( ) içinde _ sınıf deklarasyonu _ _ Uygulama bileşen _ (Yukarıya yerleştirin _ en render ( ) yöntemi .)

**21.

**aramaYelp ( ) gerekir kabul üç parametreler : terim , konum ve _ sıralama _ Bunlar parametreler temsil etmek en üç bilgi parçaları _ kuyu göndermek ile en Yelp API'si.

**22 .

**yapacaksın tamamlamak Bugün nasılsın işlevsellik sonra . İçin şimdi , searchYelp( ) içinde , bir mesaj kaydedin ile en konsol o kullanır en üç parametreler . İşte bir örnek mesaj :

“ aranıyor Havlama Pizza, Brooklyn , best_match ile ”

**ayarla _ aramaYelp SearchBar 

****23'te

****destekleyin

. **Haydi kullanmak Bugün nasılsın yöntem . Arama ekleYelp _ Emlak ile en Arama çubuğu bileşen _ _ dönüş ifade arasında . render () . Eşitle _ ile this.searchYelp .

**Arama

**İşlemi **24.

** **searchYelp ** ( )  **_ ** _ bir mesaj yazdır ile en
konsol , bir arama simülasyonu . bu

olacak sadece olmak ne zaman " hadi _ Git ” butonuna tıklanır .

_ İçinde  **SearchBar.js
** , bir yöntem
ekleyin isminde handSearch ( ) . altına yerleştir _ en handleLocationChange ( ) yöntemi .

 **25

** . handleSearch () gerekir bir etkinliği
kabul etparametre
_ içinde . _ handleSearch
() , çağrı en
geçti aşağı . searchYelp () yöntemi ( props
üzerinde
bulunur ). geçmek _ _ akım belirtmek, bildirmek
terim , konum ve _ _ _ göre sırala argümanlar olarak .

 **26

** . _ sonraki
hat , çağrı event.preventDefault () için engel olmak en
varsayılan bir bağlantıya tıklama eylemi _ tetikleme _ _ sonu _ _ yöntem .

**Arama
İşlemi ( onClick )

** **27

** . **_** son adım , handleSearch ( ) öğesini _ iş . onClick ekle _
bağlanmak
ile " hadi _ Git ” düğmesine basın . Eşitle _ ile this.handleArama
.

**APOLLO PROJESİ BÖLÜM-3**

Hoş geldin ile son kısmı _ _ _ Apollon proje ! Etkileşim ile birlikte en Yelp API'si.

**Bir dizin 

****28

** **oluşturun ** . **_

** mağaza en Havlama içindeki işlevsellik _ sahip olmak dizin . Klasör oluştur _ isminde **kullanım **içinde _ **kaynak / **dizin .

**29.

**İçinde **kullanım / **dizin adlı bir dosya oluşturun  **Yelp.js ** .

**Geri almak Yelp API v3 Kimlik Bilgileri

****30.

**API'ler gerekmek o sen geri almak ve kullanmak geçerli kimlik bilgileri ( sağlanan ile
onları ) sırayla ile kullanmak API

. Şuna göre başla : gezinme ile “ Yönet _ Uygulama ” bölümündeki _ _ [dokümantasyon sayfası ](https://www.yelp.com/developers/v3/manage_app). Not o yapacaksın sahip olmak ile giriş yapın ( veya hesap
oluştur _ Eğer sen yapma çoktan sahip olmak bir ).

**31 .

**Bir kere sen
giriş yap , yeni bir tane oluştur uygulama kullanarak en Menü ile en sol .
Doldurmak dışarı en gereklidir alanlar için en app ( “ Uygulama Adı ” için “
Apollo ” kullanabilirsiniz ) . Kabul etmek ile en şartlar ve koşullar ve
oluşturmak en uygulama _

**32.

**sen meli
sunulan bir “API Anahtarı ” na bakın ile sen . Almak bunu not edeceksin _ _ **Yelp.js'de **kullanın . _

**Ekle
kimlik bilgileri Yelp.js'ye

****33.

Yelp.js'yi **açın
. **_ **Dosyanın en üstünde bir sabit
oluşturun _ _ isminde apiKey . İçinde API anahtarınızın bir dizesini
saklayın _ _ itibaren en Yelp API'si.

**Yelp
Oluştur _ Modül

****34.

**Boş bir alan
oluşturun nesne isminde Yelp _ Bu nesne niyet mağaza en işlevsellik gerekli
ile etkileşim ile birlikte en Yelp API'si.

**Ekle
search ( )

****35.

**Nesnenin
içinde bir yöntem oluşturun _ isminde ara . bu _ _ yöntem kuyu
kullanmak ile geri almak arama Sonuçlar itibaren en Yelp API'si. Dönem , konum ve _ _ _ göre sırala parametreler ile en yöntem .

 **36

** . _ yöntem ,
başla en yöntem geri dönüş ileHangi niyet söz vermek _ o
niyet sonuçta çözmek ile bizim işletmelerin listesi . _ Sonrasında dönüş başlamak
senin çağrı zinciri _ ile arama getir ( ) .

 **37

** . geri almak
işletmeler , yapacaksın sahip olmak vurmak _ _ /
işletmeler uç
noktası _ Yelp API'si. geçmek _ _ Takip etmek yol olarak _ ilk argüman ile getir ( ) :

*https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY*

Kullanmak
interpolasyon ile yer değiştirmek DÖNEM , KONUM
, ve SORT_BY ile
en doğru değişkenler _ _ yol yukarıda .

**38.

**Senin getir ( ) olacak şu anda çalışmıyor doğru şekilde vadesi dolmuş ile [CORS kısıtlamaları ](https://www.codecademy.com/articles/what-is-cors). Bunu atlayabiliriz _ kısıtlama adlı bir
API ile [CORS Her Yerde ](https://cors-anywhere.herokuapp.com/). CORS Her Yerde niyet almak gönderilen
istekler _ API uç noktası , yap onlara için en İstemek uygulama ile birlikte en
uygun CORS izinleri ve _ sonra dönüş en tepki geri ile en İstemek uygulama _ başa
ekle URL yolu _ sen geçti ile en ilk ile getirme
( ) içindeki
argüman en aşağıdaki :

*https://cors-anywhere.herokuapp.com/*

**39.

**Ne zaman Biz
Yapmak istekler ile en Yelp API, biz sahip olmak ile bir kimlik formu sunmak
için tarayıcı . Bunun nedeni _ en Yelp API istiyor ile bilmek o Biz vardır
yetkili ile erişim API

. Bu kimlik sunuldu _ kullanarak bir tarayıcı başlığı olarak
API
anahtarımız .

bir saniye
içinde geçmek argüman ile en ( ) çağrıyı getir
. Bilişim
Teknoloji bir nesne olmalı bir başlık anahtarıyla . _ _

bu başlıkların değeri _başka olmalı _ nesne . Bu nesne meli
sahip olmak yetki anahtar olarak . bu bunun değeri _
anahtar şöyle olmalıdır :

*` Taşıyıcı ${ apiKey }`*

**40.

**Biz niyet
ihtiyaç ile dönüştürmek en iade tepki yapabilmemiz için JSON'a _ _ _ _ ile etkili
bir şekilde faydalanmak bizim işletmelerin listesi .

_ çağrı zincirleme _ kullanarak sonra ( ) için en sonu _ _ getir () yöntemi .

Geri aramayı ilet işlev . bu geri çağırmak işlev şunları yapmalıdır :

• Kullanım
ok işlev sözdizimi

• Al 1
parametre isminde yanıt

• Bir aramaya
geri dönüş ile . json () yanıt üzerine

**41.

**Zincir bir diğeri . sonra () ara sonrasında en öncesi ile geri almak en işletmelerin listesi _ itibaren en dönüştürülmüş JSON yanıtı . Geri aramayı ilet işlev o almak 1
parametre isminde jsonResponse .

**42.

**İçi _ geri çağırmak işlev , bir if ekleyin ifade o çekler ile görmek Eğer jsonResponse işletmesi var
anahtar ( bu istemek geçerli bir temsil tepki iade ile en Yelp API'si).

Olmazsa , biz _ _ yapma istemek sitemize _ _ kaza denemek ile işletmelerin bir listesini oluşturmak _ o yapma var .

**43.

**Eğer Bugün
nasılsın anahtar yapmak JSON yanıtında var , biz _ _ meli dönüş bir dizi hepsine sahip olan _ _ işletme özellikleri kuyu ihtiyaç ( _ olanlar Biz ad ,
adres , şehir ve _ _ _ _ _ daha fazla ).

İçinde
en Eğer açıklama , yineleme vasıtasıyla jsonResponse.işletmeler
kullanarak harita ( ) .

**44.

**Geri aramayı
iletin işlev ile en map ( ) metodu . bu geri çağırmak işlev meli parametre
al _ isminde iş .

**erişim
JSON Yanıtı

** **45

** .  **_ ** _ geri çağırmak işlev , bir nesne
döndürür .

Bu nesne uzun olacak _ ve meli Dahil etmek hepsi _ _ Öznitellikler gerekli ile
Apollo'da bir işletme göster .

_ Peki sağlamak en anahtar listesi _ o içinde olmalı _ jsonReponse
nesne :

• kimlik

• imageSrc

• ad

• adres

• şehir

• eyalet

• posta kodu

• kategori

• derecelendirme

• incelemeSayım

**46.

**Son olarak ,
dışa aktar senin Havlama modül .

**Yelp.js

****47'yi

** **içe aktarın ** . Yelp API işlevi sen yazdı
niyet ihtiyaç kullanılacak _ _ ile Uygulama _ **App.js'yi **açın ve içe aktarmak Havlama dosyanın
en üstünde ( sonra _ en ilk dört ithalat ).

**Sabit
Kodlanmış Bilgileri

Kaldır ****48.

**Kaldır sabit
kodlanmış _ işletme ve işletmeler bilgi itibaren  **Uygulama.js ** .

**Uygulama
Ekle _ Yapıcı

****49.

**Yukarıda en searchYelp ( ) yöntemine bir kurucu ekleyin .

_ içinde _ yapıcı :

• this.state'i ayarlayın
iş anahtarı
ile _ _ boş olarak ayarla _ dizi .

• Bağla
en aramaYelp () yöntemi ile en akım bunun
değeri _(
bizden beri vardır hakkında ile güncelle _ _ kullanmak bu
)

**değiştir
aramaYelp ( )

****50.

**Kaldır en konsol.log() mesajı itibaren aramaYelp () .

searchYelp ( ) içinde , ara Yelp.arama
() . Geçmek en
aynı üç argümanlar sağlanan ile . aramaYelp ( ) içinde Yelp.search () çağrısı .

**51.

**Bir kez Biz
geri almak bizim işletmelerin listesi , biz _ niyet ihtiyaç ile Güncelleme en devlet .

Zincirleme a sonra ( ) çağrısı ile en Yelp.search'ün
sonu ( ) .

Bir geri
arama ilet işlev o almak 1 parametre isminde işletmeler
.

içinde _ geri çağırmak işlev , güncelleme en belirtmek, bildirmek kullanarak setState () .

**52.

**Şimdi o sen
vardır sorgulama Havlama için gerçek işletmeler ve geçen aşağı en iade
işletmelerin listesi , sizin _ uygulama meli beklendiği gibi çalışın . Denemek
dışarı sorgulama birkaçı için _ farklı restoran türleri _ ve posta kodları ile
beklendiği gibi çalıştığından emin olun .

**Anahtar ekle _ <İş /

> ****53.

**Şimdi o Biz
sahip olmak gerçek veriler , değiştirebiliriz _ en İş
bileşeni o İş Listesi işler . Her liste kalem işlenmiş bir Tepki ile bileşen
ihtiyaçlar ile benzersiz _ _ anahtar , biz vardı aciz sabit koda _ bu , ama
şimdi yapabiliriz kullanmak en her birinin benzersiz kimliği olarak iş _
anahtar .

**BusinessList.js'yi
**açın . Anahtar ekle
_Emlak
ile en işlenmiş <İş/> bileşeni . Eşitle _ ile iş kimliği
. _

Tebrikler
sen sadece tam yaptı _ ön uç web uygulaması o güncellemeler otomatik olarak ve
kullanır gerçek veriler! Bu gerçekten bir Süper başarı .

**tamamlama
ve sahip **olduğun
**yansıma

**

 Tamamlandı en Apollon proje !

sen uzun bir süre gel yol . Sen başladı en proje yazan :

• Sabit
kodlama işletme bilgi

• Bir iş

listesini simüle etme • Bir sorguyu simüle etme ile en Yelp API

Şimdi , sizin proje bir durumda nerede bunların hepsi _ ilk konular sahip olmak
çözüldü . _

şimdi yapabilirsin _ arama en için Yelp API'si restoranlar o bir aramayı
eşleştir seçenek !

Biz
önermek o sen itmek senin Tepki bilgi ile ekleme özellikleri ile senin proje _
onun _ niyet izin vermek sen sadece _ _ takviye etmek senin yeni beceriler ,
ancak yarat bir şey eşsiz ve heyecan verici _ süreç . tadını çıkarın !

İpucu:
Öneri ; arama ekle _ seçenek ile senin sayfa , “ mesafe ” olabilir .

---

**APOLLO PROJECT PART-2**

In this project, you’ll complete the
second part of Apollo:  **Passing Information to Components** .

So far, you’ve hard coded business
information and rendered it manually. Now we’ll focus on how information (like
business information) can pass from component to component with less hard
coding. This is crucial as we build towards the goal of constructing a
Yelp-like clone.

**Get Started

****1.**

In terminal window, go into the Project directory and npm
start to start a development server and open up a preview of your app
in a browser tab.

**Create businesses Array

****2.**

When the Yelp API is implemented, a list of businesses will be
returned to  **App.js** . Therefore, open  **Business.js** . Cut the entire business object and paste it into **App.js. **Make sure to paste it right after the imports and above the App
class declaration.

Go back to  **App.js** . Under the business
object, create a businesses array. The array

should hold six references to the business object.

**Setting a BusinessList Prop

****3.**

In  **app.js** , add a businesses property to the `<BusinessList />` component inside of the render() method. Set the property equal to the businesses
array. (Don’t forget your curly
braces!)

**Add Functionality to the
BusinessList Prop

****4.**

Open  **BusinessList.js** , inside of the BusinessList div, access the businesses prop and call the .map() method on it.

**5.**

Inside of the map() method, pass a callback function with one parameter called business.

**6.**

The callback function should return a `<Business
/>`component. The returned `<Business />` should have a property called business. Set the property equal to the parameter of the callback
function. (Don’t forget your curly braces and semicolon!)

**Modifying Business.js using
Props

****7.**

Open  **Business.js** . What do you notice about how information is accessed inside of
the return statement?

Business information now has to be accessed via the business
prop you send.

**Add a SearchBar
Constructor

****8.

**Throughout this project,
you’ll work mainly on setting state and handling state changes in  **SearchBar.js** .

Open  **SearchBar.js** . Add a constructor in the SearchBar
component. Make sure to
pass the constructor props and call super(props) on the first line.

**9.

**Inside of the
constructor, set the state of the search bar. Use this.state
and set it equal to an
empty object.

**10.

**Add three keys to the state
object you just created.
The keys should be term, location, and sortBy.

term will
refer to the search term located in the search input, location
will refer to the
location to search near from the location input, and sortBy
will represent the
selected sorting option to use.

The first two keys should be set to empty strings (“”). The last key should be set to 'best_match'. This completes the constructor.

**Get a Sort
Option's Class

****11.

**On the Apollo page there
is no way to determine which option has been selected. This a problem; we’ll
fix this by creating a method that returns the current CSS class of the sort
options, returning whether or not each one should be styled as if it has been
selected.

Move the sortByOptions
object to the last line
of the constuctor()  (inside component) and change it from a local
variable to a member variable using this. Be sure to also update the two
references to sortByOptions in the renderSortByOptions() method to now use this.

Then, add a
new method called getSortByClass that accepts one parameter called sortByOption.

**12.

**Inside, use an if
statement to check if
the state value of sortBy is equal to the provided parameter sortByOption. If it is, return 'active', otherwise, return an empty string (“”).

**Handle a Change
in Sort Option

****13.

**getSortByClass() returns the current CSS class for a sorting option. This method
will prove useful in providing visual feedback to users.

We’ll need
another method, will be useful when communicating with the Yelp API in the future.

Add a new method called handleSortByChange. It should accept a parameter called sortByOption.

**14.

**Inside of .handleSortByChange(), update the state of sortBy
by calling .setState(). Set to the value of the method’s
argument.

**Set the Class
Name of a Sort Option

****15.

**Let’s put these two new
methods to work. Take a look at the .renderSortByOptions()
method. You’ll modify the
return statement
that returns an `<li>` element with these two new methods.:

Add a className attribute
to the `<li>` element.
Set it equal to the return value of the getSortByClass() method. Pass in sortByOptionValue
as the argument.

**Handle a
Sorting Option Change (On Click)

****16.

**Next, we’ll update the state
of a sorting option when it is clicked. Add an onClick attribute to the `<li>`
element. Set it equal to
handleSortByChange.bind(). Pass in two arguments to .bind(): this and sortByOptionValue.

This will
allow us to both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue
as the first argument to
the method call, ensuring the method is called with the appropriate value when
clicked.

**Handle a Term
or Location Change

****17.

**Apollo will also need to
handle changes in the two input elements. Specifically, it will need to handle
changes in “Terms” (businesses) and “Location” (location to search in).

Under the handleSortByChange()
method, add two new
methods:

• handleTermChange()

• handleLocationChange()

Since both will be
related to events being triggered, both should accept event
as an argument.

**18.

**Inside of both methods,
the state of each input element should be updated with the value of event.target.value.

**Handle a Term
or Location Change (onChange)

****19.

**Let’s use the methods!

Inside of the return statement of the component’s render() method,

add onChange attributes
to each `<input>` element:

• Set the
first attribute to handle term changes.

• Set the
second attribute to handle location changes.

**searchYelp() in
the App Component

****20.

**The “Let’s Go” button
also needs to provide some sort of feedback to the user. In  **App.js** , add a method called searchYelp() in the class declaration of the App
component. (Place it
above the render() method.)

**21.

**searchYelp() should
accept three parameters: term, location, and sortBy. These parameters represent the three
pieces of information we’ll send to the Yelp API.

**22.

**You’ll complete this
functionality later. For now, inside of searchYelp(), log a message to the console that uses
the three parameters. Here’s an example message:

“Searching Yelp with Pizza,
Brooklyn, best_match”

**Set the
searchYelp Prop in SearchBar

****23.

**Let’s use this method.
Add a searchYelp property
to the SearchBar component
in the return statement
of .render(). Set
it equal to this.searchYelp.

**Handle a Search

****24.

**searchYelp() will
print a message to the console, simulating a search. This

will only happen when the “Let’s Go” button is clicked.

In  **SearchBar.js** , add a method called handleSearch(). Place it under the handleLocationChange()
method.

 **25.

** .handleSearch() should
accept an event parameter. Inside of .handleSearch(), call the passed down .searchYelp()
method (located on props). Pass in the current state
values of term, location, and sortBy as arguments.

**26.

**On the next line, call event.preventDefault()
to prevent the default
action of clicking a link from triggering at the end of the method.

**Handle a Search
(onClick)

****27.

**The last step is to put handleSearch()
to work. Add an onClick
attribute to the “Let’s
Go” button. Set it equal to this.handleSearch.

**APOLLO PROJECT PART-3**

Welcome to
the final part of the Apollo project! Interacting with the Yelp API.

**Create a util
Directory

****28.

**We’ll store the Yelp functionality
in its own directory. Create a folder called **util **in
the **src/ **directory.

**29.

**Inside **util/ **directory create a file called  **Yelp.js** .

**Retrieve Yelp
API v3 Credentials

****30.

**APIs require that you
retrieve and use valid credentials (provided by them) in order to use the API.

Start by navigating to the “Manage App” section of the [documentation
page](https://www.yelp.com/developers/v3/manage_app). Note that you’ll have to log in (or
create an account if you don’t already have one).

**31.

**Once you login, create a
new app using the menu to the left. Fill out the required fields for the app
(you can use “Apollo” for “App Name”). Agree to the terms and conditions and
create the app.

**32.

**You should see an “API
Key” presented to you. Take note of this, you’ll use it in  **Yelp.js** .

**Add Credentials
to Yelp.js

****33.

**Open  **Yelp.js** . At the top of the file, create a constant called apiKey. Inside it, store a string of your API
key from the Yelp API.

**Create a Yelp
Module

****34.

**Create an empty object
called Yelp.
This object will store the functionality needed to interact with the Yelp API.

**Add search()

****35.

**Inside object, create a
method called search. This is the method we’ll use to retrieve search results from
the Yelp API. Pass in term, location, and sortBy parameters to the method.

**36.

**Inside of the method,
begin the method with a return which will return a promise that will ultimately resolve to our
list of businesses. After return begin your chain of calls by calling fetch().

**37.

**To retrieve businesses,
you’ll have to hit the /businesses endpoint of the Yelp API. Pass in the
following path as the first argument to fetch():

*https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY*

Use
interpolation to replace TERM, LOCATION, and SORT_BY with the correct variables in the path
above.

**38.

**Your fetch()
will currently not
function correctly due to [CORS
restrictions](https://www.codecademy.com/articles/what-is-cors). We can
bypass this restriction with an API called [CORS
Anywhere](https://cors-anywhere.herokuapp.com/). CORS Anywhere
will take requests sent to its API endpoint, make them for the requesting app
with the proper CORS permissions, and then return the response back to the
requesting app. Prepend the URL path you passed to the first argument in
fetch() with
the following:

*https://cors-anywhere.herokuapp.com/*

**39.

**When we make requests to
the Yelp API, we have to present a form of identification for the browser. This
is because the Yelp API wants to know that we are authorized to access the API.

This identification is presented using our API key as a browser header.

Pass in a second
argument to the fetch() call. It should be an object with a key
of headers.

The value of
headers should
be another object. This object should have Authorization as a key. The value of this key should be:

*`Bearer ${apiKey}` *

**40.

**We will need to convert
the returned response to JSON for us to be able to effectively utilize our list
of businesses.

Chain a call using then() to the end of the fetch() method.

Pass in a callback function. The callback function should:

• Use arrow
function syntax

• Take one
parameter called response

• Return a
call to .json() on response

**41.

**Chain another .then()
call after the previous
to retrieve the list of businesses from the converted JSON response. Pass in a
callback function that takes one parameter called jsonResponse.

**42.

**Inside of the callback
function, add an if statement that checks to see if jsonResponse has a businesses key (this would represent a valid
response returned by the Yelp API).

If it doesn’t, we don’t want our site to crash trying to render a list of businesses
that don’t exist.

**43.

**If this key does exists
in the JSON response, we should return an array that has all of the business properties
we’ll need (the ones we previously hard coded, like name, address, city, and
more).

In the if
statement, iterate
through jsonResponse.businesses using map().

**44.

**Pass a callback function
to the map() method.
The callback function should take a parameter called business.

**Accessing the
JSON Response

****45.

**Inside of the callback
function, return an object.

This object will be lengthy and should include all of the attributes needed to display
a business in Apollo.

We’ll provide the list of keys that should be in the jsonReponse
object:

• id

• imageSrc

• name

• address

• city

• state

• zipCode

• category

• rating

• reviewCount

**46.

**Finally, export your Yelp
module.

**Import Yelp.js

****47.

**The Yelp API
functionality you wrote will need to be used by App. Open **App.js **and
import Yelp at
the top of the file (after the first four imports).

**Remove Hard
Coded Information

****48.

**Remove the hard coded business
and businesses
information from  **App.js** .

**Add an App
Constructor

****49.

**Above the searchYelp()
method, add a
constructor.

Inside of the constructor:

• Set this.state
with a key of businesses
set to an empty array.

• Bind the searchYelp()
method to the current
value of this (since
we are about to update it to use this)

**Modify
searchYelp()

****50.

**Remove the console.log()
message from searchYelp().

Inside of searchYelp(), call Yelp.search(). Pass the same three arguments supplied
to .searchYelp() in
your Yelp.search() call.

**51.

**Once we retrieve our
list of businesses, we will need to update the state.

Chain a then() call
to the end of Yelp.search().

Pass it a callback
function that takes one parameter called businesses.

Inside of the callback function, update the state using setState().

**52.

**Now that you are
querying Yelp for real businesses and passing down the returned list of
businesses, your app should work as expected. Try out querying for a few
different types of restaurants and zipcodes to make sure it works as expected.

**Add a key to
`<Business />`

****53.

**Now that we have real
data, we can modify the Business component that BusinessList
renders. Every list item
rendered by a React component needs to have a unique key, we were unable to
hard code this, but we can now use the unique ID of each business as the key.

Open  **BusinessList.js** . Add a key property to the rendered `<Business/>`
component. Set it equal
to the ID of business.

Congratulations
you just made a full front-end web application that updates automatically and
uses real data! This is a truly awesome achievement.

**Completion and
Reflection

**

You’ve completed the Apollo
project!

You’ve come a long way. You started the project by:

• Hard coding
business information

• Simulating a
list of businesses

• Simulating a
query to the Yelp API

Now, your project is at a state where all of these initial issues have been

solved. You can now search the Yelp API for restaurants that match a search
option!

We suggest
that you push your React knowledge by adding features to your project. This
will allow you to not only reinforce your new skills, but create something
unique and exciting in the process. Enjoy!

Hint:
Suggestion; add a search option to your page, may be “distance”.
