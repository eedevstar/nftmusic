import * as mmb from 'music-metadata-browser'

export function secondsToHms(d) {
  d = Number(d)
  var h = Math.floor(d / 3600)
  var m = Math.floor((d % 3600) / 60)
  var s = Math.floor((d % 3600) % 60)

  var hDisplay = h > 0 ? h + ':' : ''
  var mDisplay = m > 0 ? (m > 9 ? m : '0' + m) + ':' : '00:'
  var sDisplay = s > 0 ? (s > 9 ? s : '0' + s) : '00'

  return hDisplay + mDisplay + sDisplay
}

export async function parseMetaData(file) {
  console.log(`Parsing file "${file.name}" of type ${file.type}`)

  return mmb.parseBlob(file, { native: true }).then(metadata => {
    console.log(`Completed parsing of ${file.name}:`, metadata)
    return metadata
  })
}

export async function parseSongsData(files) {
  const filesData = files.map(async file => {
    const metadata = await mmb.parseBlob(file, { native: true })

    const time = parseInt(metadata.format.duration.toFixed(0))

    return {
      file: file,
      name: file.path,
      ft: metadata.common.artist ? metadata.common.artist : '[Featured Artist]',
      genre: metadata.common.genre ? metadata.common.genre : '[Genre]',
      time: time,
    }
  })

  return Promise.all(filesData)
}
