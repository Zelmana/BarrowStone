import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <img src="/static/icon.png" alt="icon" class="icon" />
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 2.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: nowrap;
  min-width: 0;
}

.page-title a {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}

.page-title .icon {
  margin-right: 0;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

@media all and ($mobile) {
  .page-title {
    justify-content: flex-start;
    padding-left: 3rem; /* leave space for the mobile menu */
    font-size: 1.6rem;
    text-align: left;
  }

  .page-title .icon {
    width: 44px;
    height: 44px;
  }
}
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
