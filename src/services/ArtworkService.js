import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"


class ArtworkService {
  async getArtwork() {
    const response = await api.get('api/artworks')
    logger.log('FOUND ARTWORK WOOO', response.data) 
    this.handleArtworkResponse(response) 
    
  }

  handleArtworkResponse(response){
    const artwork = response.data.artworks.map(pojo => new Artwork(pojo))
    AppState.artwork = artwork
  }
}


export const artworkService = new ArtworkService()