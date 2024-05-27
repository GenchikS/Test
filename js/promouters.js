const promouters = [
    {
        rffm: "Shulga Sergey",
        mcsId: "s.shulga",
        shops: "Office",
        city: "Kharkov",
        adress: "Ivanova str., 7/9",
        mcsIdShops: "C013750904",
        email: "sergo.shulga@gmail.com",
    },
    {
        trainer: "Pazii Gennadii",
        mcsId: "g.paziy",
        shops: "Office",
        city: "Kharkov",
        adress: "Ivanova str., 7/9",
        mcsIdShops: "C013750904",
        email: "g.paziy@gmail.com",
    },
    {
        promouter: "Belih Jury",
        mcsId: "j.belih",
        shops: "Comfy",
        city: "Kremenchug",
        adress: "Khalamenyuka str., 7",
        mcsIdShops: "KM1376",
        email: "belkinur@gmail.com",
    },
    {
       promouter: "Kalmikov Vladimir",
        mcsId: "v.kalmikov",
        shops: "Comfy",
        city: "Poltava",
        adress: "Zinkovskaya str., 6/1a",
        mcsIdShops: "С070131388",
        email: "v.kalmykov99@gmail.com", 
    },
    {
       promouter: "Lozytskyi Serhii",
        mcsId: "s.lozytskyi",
        shops: "Foxtrot",
        city: "Poltava",
        adress: "Zinkovskaya str., 6/1a",
        mcsIdShops: "KM3609",
        email: "lozytskyi.serhii@gmail.com", 
    },
    {
        promouter: "Manzheleiy Vitaliy",
        mcsId: "v.manzheleiy",
        shops: "Comfy",
        city: "Sumy",
        adress: "Kharkovskaya str., 2/2",
        mcsIdShops: "C004400855",
        email: "manjik1537@gmail.com",
    },
    {
        promouter: "Krasnorutskiy Sergey",
        mcsId: "s.krasnoruckij",
        shops: "Comfy",
        city: "Kharkov",
        adress: "Moskovskiy ave., 257",
        mcsIdShops: "C070133812",
        email: "skrasnorutsky@gmail.com",
    },
    {
        promouter: "Savin Ilya",
        mcsId: "i.savin",
        shops: "Foxtrot",
        city: "Kharkov",
        adress: "Pushkinska str., 2a",
        mcsIdShops: "C070040315",
        email: "yailyas12@gmail.com",
    },
    {
        promouter: "Poznyak Igor",
        mcsId: "i.poznyak",
        shops: "Epicentr",
        city: "Kharkov",
        adress: "Gagarina ave., 352",
        mcsIdShops: "C070040315",
        email: "goscha.poznyak@gmail.com",
    },
    {
        promouter: "Parmatov Mykhailo",
        mcsId: "m.parmatov",
        shops: "Comfy",
        city: "Kharkov",
        adress: "Dudinskoi str., 1a",
        mcsIdShops: "С053821556",
        email: "beterok2017@gmail.com",
    },
    {
        merch: "Revin Alexey",
        mcsId: "a.revin",
        shops: "Office",
        city: "Kharkov",
        adress: "Ivanova str., 7/9",
        mcsIdShops: "C013750904",
        email: "alekssph@gmail.com",
    },
    {
        merch: "Zinov'ev Alexey",
        mcsId: "a.zinovev",
        shops: "Office",
        city: "Kharkov",
        adress: "Ivanova str., 7/9",
        mcsIdShops: "C013750904",
        email: "Leprechaun1337skills@gmail.com",
    },
    {
        merch: "Kushnirov Vladislav",
        mcsId: "v.kushnirov",
        shops: "Office",
        city: "Kharkov",
        adress: "Ivanova str., 7/9",
        mcsIdShops: "C013750904",
        email: "my.kwit@gmail.com",
    },
]

const company = prompt(`Введіть компанію (анл. літерами) в якій працює співробітник:`).toLowerCase();
if (company === "samsung") {
    const userIn = prompt(`Введіть mcs ID співробітника:`);
    const names = promouters.map(promo => promo.mcsId); // зібрали в масив властивість ключа mcsId
    if (names.includes(userIn)) {
        for (const prom of promouters) {  //  перебераємо масив promouters по кожному об'єкту
            if (userIn === prom.mcsId) {
                alert(`Щоб побачити дані обраного співробітника (натисніть F12):`);
                console.log(Object(prom));
        };
        };
    } else {
        console.log(alert(`Данного співробітника: ${userIn} не знайдено. Спробуйте заново.`));
    };
    } else {
    console.log(alert(`Данну компанію: ${company} не знайдено. Спробуйте заново.`));
}
    