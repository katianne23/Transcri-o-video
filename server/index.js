import express from 'express';
import cors from 'cors';
import { downloader } from './download-video.js';
import { createMp3 } from './create-mp3.js';

const app = express()
app.use(cors())

app.get('/audio', async (req, res) => {
    const videoId = req.query.v

    try {

        await downloader(videoId)

        await createMp3()

        return res.send("ok")
    } catch (error) {
        console.log(videoId)
        return res.send(videoId)
    }

})
app.listen(3333, () => console.log('Server up'))