using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactWebApp.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HelloWorld()
        {
            return View();
        }

        public ActionResult HiWorld()
        {
            return View();
        }

        public ActionResult SimpleApp()
        {
            return View();
        }

        public ActionResult MathApp()
        {
            return View();
        }
    }
}