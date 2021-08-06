using React;
using System.Web;
using System.Web.Optimization;

namespace ReactWebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(
                new ScriptBundle("~/bundles/React")
                .Include("~/Scripts/react-17.0.2.development.js")
                .Include("~/Scripts/react-dom-17.0.2.development.js")
            );

            bundles.Add(
                new ScriptBundle("~/bundles/PropTypes")
                .Include("~/Scripts/prop-types-15.6.2.js")
            );

            //bundles.Add(
            //    new ScriptBundle("~/bundles/JavaScriptHelpers")
            //    .Include("~/JS/TeleportAPIHelper.js")
            //    .Include("~/JS/TeleportAPIHelper1.js")
            //);

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            bundles.Add(
                new StyleBundle("~/Content/css")
                    //.Include("~/Content/bootstrap.css")
                    .Include("~/Content/site.css")
            );
        }
    }
}
