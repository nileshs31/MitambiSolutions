<!DOCTYPE html>
<head>
	<link rel="stylesheet" type="text/css" href="/mitambisolutions/css/headerStyle.css">
</head>
<body>
<nav class="nav collapsible">
<div><a href="/mitambisolutions" style="float:left;"><img class = "logo" src="/mitambisolutions/images/logo.png" alt="" ></a>
<div class="LogoText"><a href="/mitambisolutions">MitambiSolutions</a></div> 
</div>
<svg class="icon icon--white navToggler">
    <use xlink:href="images/sprite.svg#menu"></use>
  </svg>

    <ul class="list navList collapsibleContent">
    <li class="navItem"><a href="/mitambisolutions/ourwork.php">Our Work</a></li>
    <li class="navItem"><a href="/mitambisolutions/techstack.php">Tech Stack</a></li>
    <li class="navItem"><a href="/mitambisolutions/team.php">Meet The Team</a></li>
    <li class="navItem"><a href="/mitambisolutions/careers.php">Careers</a></li>
    <li class="navItem"><a href="/mitambisolutions/contactus.php">Contact Us</a></li>
  </ul>

</nav>

<script>
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
    this.classList.toggle("collapsibleExpanded");
  })
);
</script>
</body>