namespace Web
{
    using Nancy.Owin;
    using Microsoft.AspNet.Builder;
 
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseOwin(x => x.UseNancy());
        }
    }
}
