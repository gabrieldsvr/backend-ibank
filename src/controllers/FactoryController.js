const MusicsFactory = require("../database/factories/MusicsFactory");
const AudiosFactory = require("../database/factories/AudiosFactory");
const DocumentsFactory = require("../database/factories/DocumentsFactory");

async function createFakeMusics(req, res) {
    const numberOfFakeMusics = 10;

    for (let i = 0; i < numberOfFakeMusics; i++) {
        const fakeMusic = await MusicsFactory.createMusic();
        console.log(fakeMusic);
    }

    res.status(200).json();
}

async function createFakeAudios(req, res) {
    const {id} = req.params;
    const numberOfFakeAudios = 10;

    for (let i = 0; i < numberOfFakeAudios; i++) {

        const fakeMusic = AudiosFactory.createAudio(id);
        console.log(fakeMusic);
    }

    res.status(200).json();
}

async function createFakeDocuments(req, res) {
    const {id} = req.params;
    const numberOfFakeDocuments = 10;

    for (let i = 0; i < numberOfFakeDocuments; i++) {

        const fakeDocument = DocumentsFactory.createDocument(id);
        console.log(fakeDocument);
    }

    res.status(200).json();
}


module.exports = {createFakeMusics, createFakeAudios, createFakeDocuments}