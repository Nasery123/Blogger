import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogService {

    async getBlogs() {
        const res = await api.get('api/blogs')
        AppState.blogs = res.data.map(b => new Blog(b))
        logger.log('blogs service here', res.data)
        // console.log(res.data, '[HERE IS THE BLOGS]')

    }

    async getBlogsByProfile(id) {
        AppState.blogs = []
        const res = await api.get('api/blogs', {
            params: {
                creatorId: id
            }
        })
        logger.log('gettingblogsbyprofile', res.data)
        AppState.blogs = res.data.map(b => new Blog(b))

    }
}
export const blogService = new BlogService()
