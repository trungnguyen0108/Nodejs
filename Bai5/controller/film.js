

const data = {
    film1: {
        img: "https://images.danet.vn/images//src/882/f7e/0823f5e5a0d61efa3358cb371ccdfc4f.jpg",
        title: "attack on titan",
        content: "hay" 
    },
    film2: {
        img: "https://cellphones.com.vn/sforum/wp-content/uploads/2021/07/wallpapersden.com_demon-slayer_800x1280.jpg",
        title: "demon slayer",
        content: "hay2" 
    }
}

export function getFilms (req, res) {
    res.json(data)
}

export function postFilm(req,res) {
   res.json({
       status: "ok"
   })
}

export function putFilm(req, res) {
    res.send ("put film")
}

export function deleteFilm(req,res) {
    res.send ("delete film")
}