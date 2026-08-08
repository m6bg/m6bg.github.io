/* @ds-bundle: {"format":4,"namespace":"MarkPasacretaDesignSystem_dc2f65","components":[{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"WritingBlock","sourcePath":"components/content/WritingBlock.jsx"},{"name":"ForwardLink","sourcePath":"components/links/ForwardLink.jsx"},{"name":"ProjectLink","sourcePath":"components/links/ProjectLink.jsx"},{"name":"BackMark","sourcePath":"components/navigation/BackMark.jsx"}],"sourceHashes":{"components/content/SectionHeader.jsx":"ee250eda208f","components/content/WritingBlock.jsx":"1406542c98e2","components/links/ForwardLink.jsx":"82757b2f90e9","components/links/ProjectLink.jsx":"0983428b017a","components/navigation/BackMark.jsx":"e1c26b2e3da9","ui_kits/portfolio-site/App.jsx":"62e7cb23c78c","ui_kits/portfolio-site/LandingPage.jsx":"a834a23afe44","ui_kits/portfolio-site/PortfolioListPage.jsx":"c7db3864cd18","ui_kits/portfolio-site/ProjectDetailPage.jsx":"1ccfeb218c2e","ui_kits/portfolio-site/SimpleTextPage.jsx":"a60f17fd9301","ui_kits/portfolio-site/data.js":"f59c23886c90"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MarkPasacretaDesignSystem_dc2f65 = window.MarkPasacretaDesignSystem_dc2f65 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  dates
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-h1)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, title), dates ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, dates) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/WritingBlock.jsx
try { (() => {
function WritingBlock({
  children,
  image,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-primary)",
      maxWidth: "640px"
    }
  }, children), image ? /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: caption || "",
    style: {
      width: "100%",
      display: "block",
      borderRadius: "var(--radius-sm)"
    }
  }), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-micro)",
      color: "var(--text-tertiary)"
    }
  }, caption) : null) : null);
}
Object.assign(__ds_scope, { WritingBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WritingBlock.jsx", error: String((e && e.message) || e) }); }

// components/links/ForwardLink.jsx
try { (() => {
function ForwardLink({
  children,
  href = "#",
  size = "large",
  onClick
}) {
  const isLarge = size === "large";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: isLarge ? "var(--text-h2)" : "var(--text-body)",
      color: "var(--text-primary)",
      textDecoration: "none",
      letterSpacing: "var(--tracking-normal)"
    },
    className: "ds-forward-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-forward-link-label"
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "ds-forward-link-arrow",
    style: {
      display: "inline-block",
      transition: "transform var(--duration-normal) var(--ease-standard)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { ForwardLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/links/ForwardLink.jsx", error: String((e && e.message) || e) }); }

// components/links/ProjectLink.jsx
try { (() => {
const {
  useState
} = React;
function ProjectLink({
  children,
  href = "#",
  active = false,
  onClick
}) {
  const [pressed, setPressed] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-h2)",
      lineHeight: "var(--leading-snug)",
      color: pressed || active ? "var(--text-primary)" : "var(--text-secondary)",
      textDecoration: "none",
      textUnderlineOffset: "5px",
      transition: "color var(--duration-fast) var(--ease-standard)"
    },
    className: "ds-project-link"
  }, children);
}
Object.assign(__ds_scope, { ProjectLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/links/ProjectLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BackMark.jsx
try { (() => {
function BackMark({
  href = "/",
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "1.125rem",
      color: "var(--text-primary)",
      textDecoration: "none",
      letterSpacing: "var(--tracking-tight)",
      transition: "opacity var(--duration-fast) var(--ease-standard)"
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "0.55",
    onMouseLeave: e => e.currentTarget.style.opacity = "1"
  }, "m");
}
Object.assign(__ds_scope, { BackMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BackMark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/App.jsx
try { (() => {
function App() {
  const [route, setRoute] = React.useState("landing");
  const [slug, setSlug] = React.useState(null);
  function navigate(r, s) {
    setRoute(r);
    if (s) setSlug(s);
  }
  if (route === "portfolio") return /*#__PURE__*/React.createElement(window.PortfolioListPage, {
    navigate: navigate
  });
  if (route === "project") return /*#__PURE__*/React.createElement(window.ProjectDetailPage, {
    slug: slug,
    navigate: navigate
  });
  if (route === "experience") return /*#__PURE__*/React.createElement(window.SimpleTextPage, {
    title: "Experience",
    navigate: navigate,
    lines: ["Product designer working across web and native apps, currently focused on small, well-made tools.", "Previously: design roles at two early-stage startups, plus freelance work for a handful of studios."]
  });
  if (route === "hobbies") return /*#__PURE__*/React.createElement(window.SimpleTextPage, {
    title: "Hobbies",
    navigate: navigate,
    lines: ["Film photography, mostly black and white.", "Long-distance running.", "Cooking — mostly bread."]
  });
  return /*#__PURE__*/React.createElement(window.LandingPage, {
    navigate: navigate
  });
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/LandingPage.jsx
try { (() => {
function LandingPage({
  navigate
}) {
  const {
    ForwardLink
  } = window.MarkPasacretaDesignSystem_dc2f65;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-bg)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "56px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "clamp(2.75rem,6vw,5.5rem)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, "Mark Pasacreta"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "56px"
    }
  }, /*#__PURE__*/React.createElement(ForwardLink, {
    href: "#",
    onClickCapture: e => {
      e.preventDefault();
      navigate("experience");
    }
  }, "experience"), /*#__PURE__*/React.createElement(ForwardLink, {
    href: "#",
    onClickCapture: e => {
      e.preventDefault();
      navigate("portfolio");
    }
  }, "portfolio"), /*#__PURE__*/React.createElement(ForwardLink, {
    href: "#",
    onClickCapture: e => {
      e.preventDefault();
      navigate("hobbies");
    }
  }, "hobbies")));
}
window.LandingPage = LandingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/LandingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/PortfolioListPage.jsx
try { (() => {
function PortfolioListPage({
  navigate
}) {
  const {
    BackMark,
    ProjectLink
  } = window.MarkPasacretaDesignSystem_dc2f65;
  const projects = window.projects;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-bg)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 48px"
    }
  }, /*#__PURE__*/React.createElement(BackMark, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate("landing");
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px",
      margin: "0 auto",
      padding: "40px 24px 120px",
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(ProjectLink, {
    key: p.slug,
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate("project", p.slug);
    }
  }, p.title))));
}
window.PortfolioListPage = PortfolioListPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/PortfolioListPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ProjectDetailPage.jsx
try { (() => {
function ProjectDetailPage({
  slug,
  navigate
}) {
  const {
    BackMark,
    SectionHeader,
    WritingBlock
  } = window.MarkPasacretaDesignSystem_dc2f65;
  const projects = window.projects;
  const project = projects.find(p => p.slug === slug) || projects[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-bg)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 48px"
    }
  }, /*#__PURE__*/React.createElement(BackMark, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate("portfolio");
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "640px",
      margin: "0 auto",
      padding: "20px 24px 120px",
      display: "flex",
      flexDirection: "column",
      gap: "36px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: project.title,
    dates: project.dates
  }), /*#__PURE__*/React.createElement(WritingBlock, null, project.body)));
}
window.ProjectDetailPage = ProjectDetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ProjectDetailPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/SimpleTextPage.jsx
try { (() => {
function SimpleTextPage({
  title,
  lines,
  navigate
}) {
  const {
    BackMark
  } = window.MarkPasacretaDesignSystem_dc2f65;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-bg)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 48px"
    }
  }, /*#__PURE__*/React.createElement(BackMark, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate("landing");
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px",
      margin: "0 auto",
      padding: "20px 24px 120px",
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-h1)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, title), lines.map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-primary)"
    }
  }, l))));
}
window.SimpleTextPage = SimpleTextPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/SimpleTextPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/data.js
try { (() => {
window.projects = [{
  slug: "signal",
  title: "Signal — a calmer inbox",
  dates: "Feb 2025 — May 2025",
  body: "Signal strips email down to the messages that actually need a reply. I designed the triage model, the review queue, and the empty-state that made \"done\" feel real."
}, {
  slug: "fieldnotes",
  title: "Fieldnotes",
  dates: "Sep 2024 — Jan 2025",
  body: "A journaling tool for research teams. Focused on making raw notes searchable without asking anyone to tag them first."
}, {
  slug: "loop",
  title: "Loop scheduling",
  dates: "Mar 2024 — Jul 2024",
  body: "Rebuilt the scheduling core for a small ops team, cutting the average booking flow from six steps to two."
}, {
  slug: "atlas",
  title: "Atlas",
  dates: "Aug 2023 — Feb 2024",
  body: "An internal tool for mapping dependencies across a growing codebase. Started as a weekend script, ended up in daily use."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.WritingBlock = __ds_scope.WritingBlock;

__ds_ns.ForwardLink = __ds_scope.ForwardLink;

__ds_ns.ProjectLink = __ds_scope.ProjectLink;

__ds_ns.BackMark = __ds_scope.BackMark;

})();
