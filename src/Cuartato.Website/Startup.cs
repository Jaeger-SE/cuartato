﻿using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace Cuartato.Website
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.ConfigureRouting(options => { options.LowercaseUrls = true; });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseIISPlatformHandler();

            app.UseMvc();
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}