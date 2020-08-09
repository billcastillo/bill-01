import matter from 'gray-matter';

const BlogList = () => {
    const posts = (ctx => {
        const keys = ctx.keys();
        const values = keys.map(ctx);
        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            const value = values[index];
            // Parse document
            const document = matter(value.default);
            return {
                document,
                slug
            };
        });
        return data;
    })(require.context('../posts', true, /\.md$/));

    return { posts };
}

export default BlogList