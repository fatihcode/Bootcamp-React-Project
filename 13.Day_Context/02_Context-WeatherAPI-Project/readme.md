# React-Context Hava Durumu API'sı

Bu projede; kullanıcıların birden fazla şehirdeki mevcut sıcaklığı görüntülemesini sağlayan ve bu sıcaklıkların ortalamasını gösteren basit bir web uygulaması yapacağız. Kullanıcı birden fazla şehir ekleyebilir ve uygulama ayrıca listelenen tüm sıcaklıkların ortalamasını gösterir.

Başlayalım!

Halihazırda çalışan bir React yolunuz varsa (veya yeni bir tane oluşturduysanız):

Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start

ADIMLAR:
1.
İlk olarak, Context'i oluşturalım. İçinde bir bağlam klasörü ve WeatherContext.js dosyası oluşturun. İki şeyin başlangıç değerlerini depolamak için createContext yöntemini kullanın:
• Bir şehirler dizisi, bu ilk dizi boş.
• Bu diziye şehirler eklemek için bir addCity işlevi. Adı ve sıcaklığı parametre olarak alır, bunu şimdilik boş (boş) bir fonksiyon olarak bırakın.
• sabit bir WeatherContext'e createContext atayın.

> İPUCU:
>
> ```
> const customContext = React.createContext({
>   veri: [],
>   yöntem: (param1, param2) => { },
> });
> ```

App.js dosyasında burada birkaç şey yapacaksınız:
• Şehirleri takip etmek için React Hooks (useState) kullanın (şimdi boş diziyi bırakın) ve setCities ayarlayıcı yöntemi oluşturun.
• Bir addCity işlevi oluşturun, sadece setCities'i çağırın; isim ve sıcaklığı iki parametre olarak alır ve şehirler dizisini günceller.
(Sadece örneğin; son dizi şöyle olurdu: [ {London , 7} , {Berlin , 5 } , {Roma , 12} ]
• Uygulamanızı WeatherContext.Provider kullanarak hiyerarşiye sarın. Şehirler dizisini ve addCity işlevini değerler olarak gönderin.
• `</h2>` öğesinin altına CityList, AddCityButton ve TemperatureAverage gibi alt bileşenleri ekleyin. (h2'nin kapanış etiketinden sonra h2'nin içinde olmadığı anlamına gelir)

CityList.js dosyasında CityList bileşeni; Bu, WeatherContext React Context'imizin ilk tüketicisidir.
• Şehirlerin listesini alın, (WeatherContext'ten şehir bağlamını almak için UseContext kanca yöntemini kullanın.)
• Bunları hem adı hem de sıcaklığı göstererek tabloya (`<tbody>` içinde) eşleyin.

SıcaklıkAverage.js dosyasında SıcaklıkAverage bileşeni; Bu, WeatherContext'in ikinci tüketicisidir.
• İlk olarak, ortalama sıcaklığı elde etmek için; her şehrin sıcaklığının ortalamasını değişken bir toplamla toplayın (varsayılan değer 0'dır) ve bunu şehirler dizisinin uzunluğuna bölün.
• Henüz şehir yoksa, bu 0'a bölünür, bu nedenle kullanıcıya ortalama yerine basit bir mesaj gösterin.
• Artık şehirleri bağlamdan tüketmeliyiz. Şehirleri bağlam şehirleri ile sabit olarak değiştirin. (useContext'i kullanın)

Şimdiye kadar, özel React Context'imizin yalnızca şehirler özelliğini kullandık. AddCityButton bileşeni, sonunda addCity özelliğini kullanacak olan şeydir.
• WeatherContext'ten addCity yönteminizi alın (useContext kullanın).
• Dizi adını takip etmek ve bir setName oluşturmak için React Hooks'u (useState) kullanın.
• Giriş değerine göre adı değiştiren bir olay işleyicisi oluşturun.
• Bir sendCity işlevi oluşturun, addCity yöntemine yalnızca ad ve rastgele bir sıcaklık (1 ile 10 arasında bir sayı) gönderir. Düğmenin onclick işleyicisine sendCity işlevini atayın.
addCity çağrımız şu anda rastgele bir sıcaklık veriyor, ancak bunu sonraki adımlarda gerçek verilerle değiştireceğiz.

6. Ek Getirme Adımı
   Artık çalışan bir uygulamamız olduğuna göre, gerçek verileri kullanmasını sağlayalım. Rastgele sıcaklık göndermek yerine “weatherstack.com” veya “openweather.com” dan bir getirme yapın ve sıcaklığı addCity işlevine gönderin.
   (Unutmayın; javascript “Wanderlust” projemizde weatherstack kullandık)
7. meydan okuma
   Listeden şehirleri silmek için uygulamayı genişletmeyi deneyin. Tıpkı WeatherContext'te bir addCity işlevimiz olduğu gibi, bunun da muhtemelen bir deleteCity işlevine ihtiyacı olacaktır.

---



# React-Context Weather API

In this Project; we’ll make a simple web app that lets users view the current temperature in multiple cities, and shows the average of these temperatures. The user can add multiple cities, and the app will also show an average of all the temperatures listed.

Let’s get started!

If you have a working React path already (or you just created a new one):

Change your original “src” folder with the Project’s “src” and run your application: npm start

**STEPS:**

**1.**

First, let’s create the Context. Create a context folder and WeatherContext.jsfile inside it. Use createContext method to store initial values of two things:

·
A cities array, this initial array is empty.

·
An `<span>addCity</span>` function to add cities to this array. It takes the name and temperature as parameters, leave this a dummy (empty) function for now.

·
Assign createContext to a constant WeatherContext.

HINT:

const customContext = React.createContext({

  data: [],

  method: (param1, param2) => { },

});

**2.**

In App.js file you will do a few things here:

·
Use React Hooks (useState) to keep track of the cities (keep it empty array now) and create a setter method setCities.

·
Create an addCity function just call the setCities; takes name and temperature as two parameters and update cities array.

*(Just for example; final array would be
like this: [ {London , 7} , {Berlin , 5 } , {Roma , 12} ]*

·
Wrap your App in the hierarchy using WeatherContext.Provider. Send cities array and addCity function as values.

·
Add child components, such as CityList, AddCityButton and TemperatureAverage under `</h2>` element. (it means; not inside h2, after the closing tag
of h2)

**3.**

In `<span>CityList.js</span>` file  `<span>CityList</span>` component; This is the first *consumer* of our `<span>WeatherContext</span>` React Context.

·
Grab the list of cities, (use useContext hook method to take cities context
from WeatherContext.)

·
Map them into the table (inside

<tbody>), showing both the name and the temperature.

**4.**

In `<span>TemperatureAverage.js</span>` file
`<span>TemperatureAverage</span>` component;
This is the second consumer of WeatherContext.

·
First, to get the average temp; add up the average of each city’s
temperature to a variable total (default value is 0), and divide it by the length of the cities array.

·
If there are no cities yet, this would divide by 0, so show a simple
message to the user instead average.

·
Now, we should consume cities from context. Change `<span>cities</span>` constant with the context cities. (use `<span>useContext</span>`)

**5.**

So far, we’ve only used the `<span>cities</span>` property of our custom React Context. The `<span>AddCityButton</span>` component is what’s finally going to use the `<span>addCity</span>` property.

·
Grab your `<span>addCity </span>`method from `<span>WeatherContext</span>`(use `<span>useContext</span>`).

·
Use React Hooks (useState) to keep track of the array name and create a setter setName.

·
Create a event handler that changes name according to input value.

·
Create a submitCity function just sends name and a random temperature (number between 1 and 10) to the addCity method. Assign submitCity function to onclick handler of button.

Our call to `<span>addCity</span>` is giving a random temperature now but we’ll replace this with real data in later steps.

**6.
Additional Fetch Step**

Now that we have a working app, let’s make it use real data. İnstead of sending random temperature make a fetch from “weatherstack.com”
or “openweather.com” and send the temperature to the `<span>addCity</span>` function.

(Remember; we used weatherstack in our javascript “Wanderlust” project)

**7.Challenge**

Try extending the application to delete cities from the list. Just like we have an `<span>addCity</span>` function in `<span>WeatherContext</span>`, this will probably need a `<span>deleteCity</span>` function.
