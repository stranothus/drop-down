class DropDown extends HTMLElement {
    constructor() {
        super();

        let index = this;
        let getAttr = (attr, or) => this.getAttribute(attr) || or;
        let attr = {
            open : getAttr("open", "false").toLowerCase() === "true",
            event : getAttr("event", "hover"),
            appear : getAttr("appear", "slide-down"),
            duration : Number(getAttr("duration", "300"))
        };

        let title = index.querySelector("#title");
        let content = index.querySelector("#content");
        let height = content.getBoundingClientRect().height;
        let width = content.getBoundingClientRect().width;

        content.style.position = "relative";

        let open;
        let close;

        switch(attr.appear) {
            case "slide-down" :
                open = () => content.animate([
                    {
                        height : "0"
                    },
                    {
                        height : height + "px"
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                close = () => content.animate([
                    {
                        height : height + "px"
                    },
                    {
                        height : "0"
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                if(!attr.open) {
                    content.style.height = 0;
                }
            break;
            case "slide-up" :
                open = () => content.animate([
                    {
                        height : "0",
                        top : height + "px"
                    },
                    {
                        height : height + "px",
                        top : 0
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                close = () => content.animate([
                    {
                        height : height + "px",
                        top : 0
                    },
                    {
                        height : "0",
                        top : height + "px"
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                if(!attr.open) {
                    content.style.height = 0;
                    content.style.top = height + "px";
                }
            break;
            case "slide-left" :
                open = () => content.animate([
                    {
                        width : "0"
                    },
                    {
                        width : width + "px"
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                close = () => content.animate([
                    {
                        width : width + "px"
                    },
                    {
                        width : "0"
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                if(!attr.open) {
                    content.style.width = 0;
                }
            break;
            case "slide-right" :
                open = () => content.animate([
                    {
                        width : "0",
                        left : width + "px"
                    },
                    {
                        width : width + "px",
                        left : 0
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                close = () => content.animate([
                    {
                        width : width + "px",
                        left : 0
                    },
                    {
                        width : "0",
                        left : width + "px"
                    }
                ], {
                    duration : attr.duration,
                    ease : "ease-in-out",
                    fill : "forwards"
                });

                if(!attr.open) {
                    content.style.width = 0;
                    content.style.left = width + "px";
                }
            break;
            case "fade-in" :
                open = () =>  {
                    content.style.display = "block";

                    content.animate([
                        {
                            opacity : "0"
                        },
                        {
                            opacity : "1"
                        }
                    ], {
                        duration : attr.duration,
                        ease : "ease-in-out",
                        fill : "forwards"
                    });
                };

                close = () => {
                    content.animate([
                        {
                            opacity : "1"
                        },
                        {
                            opacity : "0"
                        }
                    ], {
                        duration : attr.duration,
                        ease : "ease-in-out",
                        fill : "forwards"
                    });

                    window.setTimeout(() => {
                        content.style.display = "none";
                    }, attr.duration);
                };

                if(!attr.open) {
                    content.style.opacity = "0";
                    content.style.display = "none";
                }
            break;
        }

        switch(attr.event) {
            case "hover" :
                this.addEventListener("mouseleave", close);
                this.addEventListener("mouseenter", open);
            break;
            case "click" :
                let isOpen = attr.open;
                title.addEventListener("click", () => {
                    if(isOpen) {
                        close();
                    } else {
                        open();
                    }

                    isOpen = !isOpen;
                });
            break;
            default :
                throw "Please assign a valid event type for your drop-down element";
        }
    }
}

customElements.define('drop-down', DropDown);
