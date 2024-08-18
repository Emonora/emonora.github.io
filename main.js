let minimized = false;
let docked = false;
let windowcheck = $(".application");

function handleClick(event) {
  let app_manager = $(".app-manager");
  if (app_manager.attr("id") === "closed") {
    app_manager.removeAttr("id");
  } else {
    app_manager.attr("id", "closed");
  }
}

function aboutme() {
  let $window = $(".application");
  $window.empty();
  if ($window.hasClass("aboutme-window")) {
    $window.removeClass("aboutme-window");
  } else if (minimized) {
    if (!$window.hasClass("aboutme-window")) {
      $window.addClass("aboutme-window");
    }
    $window.append(
      `<div class='titlebar'>
        <img class='minimize' onclick='handlewindow("minimize");' src='assets/images/minimize.png' />
        <img class='X' onclick='handlewindow("close");' src='assets/images/X.png' />
      </div>
      <h1>About Me</h1>
      <p>Hai! I'm Emonora! I'm very interested in IT. My interests are in the following categories: Cybersecurity, and Software & Web Development. I have an interest in securing linux systems, and I'm also interested in being a pen tester. Recently, I competed in Cyber Patriot 16, and brought my team to the semis! I'm also good at writing, and I'm trying to improve my drawing skills! (Eventually I'll take writing commissions, but I'm busy at the moment). That's All! You can look around the site for more!! :3</p>`
    );
    $window.show();
  } else {
    $window.addClass("aboutme-window");
    $window.append(
      `<div class='titlebar'>
        <img class='minimize' onclick='handlewindow("minimize");' src='assets/images/minimize.png' />
        <img class='X' onclick='handlewindow("close");' src='assets/images/X.png' />
      </div>
      <h1>About Me</h1>
      <p>Hai! I'm Emonora! I'm very interested in IT. My interests are in the following categories: Cybersecurity, and Software & Web Development. I have an interest in securing linux systems, and I'm also interested in being a pen tester. Recently, I competed in Cyber Patriot 16, and brought my team to the semis! I'm also good at writing, and I'm trying to improve my drawing skills! (Eventually I'll take writing commissions, but I'm busy at the moment). That's All! You can look around the site for more!! :3</p>`
    );
    $window.show();
  }
}

function handlewindow(type) {
  let $window = $(".application");
  $window.hide();
  if (type === "minimize") {
    minimized = true;
  } else {
    $window.removeClass("aboutme-window");
    $window.empty();
  }
}

function checkforwindow() {
  if (windowcheck.hasClass("aboutme-window")) {
    let draggable = document.getElementsByClassName("aboutme-window")[0];
    let offsetX,
      offsetY,
      isDragging = false;

    draggable.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - draggable.getBoundingClientRect().left;
      offsetY = e.clientY - draggable.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }
}
function appdock() {
  if (minimized) {
    let app_dock = $(".app_dock");
    if (!docked) {
      app_dock.removeAttr("id");
      app_dock.append(
        `<div class='app-icon' onclick='aboutme();'><img src='assets/images/pfp.png' /></div>`
      );
    }
    docked = true;
  }
}

setInterval(appdock, 100);
setInterval(checkforwindow, 100);
