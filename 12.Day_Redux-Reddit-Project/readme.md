# React-Redux Reddit Arama

Bu projede Redux bilginizle reddit api kullanacaksınız.

Başlayalım!

Zaten çalışan bir React-Redux yolunuz varsa (veya yeni bir tane oluşturduysanız):
Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start

Hedefleriniz;
• Seçiciden bir seçim yaptığınızda, reddit api'den bir liste olarak sonuçları görmelisiniz.
• Durumları depolamak ve eylemi almak için redux kullanın.
• Async araması yapmak için Redux Thunk ara yazılımını kullanın.

ADIMLAR:
Ara yazılım olmadan, Redux deposu yalnızca eşzamanlı veri akışını destekler. Bu nedenle, thunk katman yazılımını; npm redux-thunk'u kurun
1.
`https://www.reddit.com/r/${subreddit}.json`
Parametre olarak "subreddit" alın.

Tebrikler!

Meydan okuma:
• Yenile butonuna tıkladığınızda aramanız kendini yenileyecek ve gerçek zamanı sayfada gösterecektir.
• Arama değeri için sonuç olmadığında sayfada sadece “Sonuç Yok” yazısı görünmelidir.
• Sonuçları yüklemeden önce (1 saniye veya daha fazla olabilir), sayfada “Yükleniyor…” yazmalıdır.

---



# React-Redux Reddit Search

In this Project you
will use reddit api with your knowledge of Redux.

Let’s get started!

**If you
have a working React-Redux path already (or you just created a new one):**

Change your original “src”
folder with the Project’s “src” and run your application: npm
start

Your goals are;

·
When you select a choice from selector, you should see results
as a list from reddit api.

·
Use redux for storing states and fetch action.

·
Use [Redux Thunk middleware](https://github.com/gaearon/redux-thunk) to make Async call.

**STEPS:**

Without middleware,
Redux store only supports synchronous data flow. Thus, install thunk
middleware with; npm install redux-thunk

**1.**

`https://www.reddit.com/r/${subreddit}.json`

Take “subreddit” as parameter.

Congragulations!

Challange:

·
When you click refresh button, your search will be refresh
itself and show actual time on page.

·
When there is no result for searching value, page should show “No
Result” text only.

·
Before loading the results (may be 1 second or more), it should show
“Loading…” on the page.
