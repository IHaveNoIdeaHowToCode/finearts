export class Artwork {
  constructor(data){
    this.id = data.id
    this.slug = data.slug
    this.description = data.description
    this.height = data.height
    this.width = data.width
    this.imgUrl = data.imgUrls
    this.attr = data.attribution
    this.likes = data.admirers
  }
}

