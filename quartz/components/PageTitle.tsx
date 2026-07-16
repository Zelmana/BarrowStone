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
  justify-content: flex-start;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: nowrap;
  min-width: 0;
  width: auto;
}

.page-header .page-title {
  justify-content: flex-start;
}

.page-title a {
  min-width: 0;
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.page-title .icon {
  margin-right: 0;
  width: 60px;
  height: auto;
  max-height: 60px;
  flex-shrink: 0;
  object-fit: contain;
  display: block;
}

@media (max-width: 800px) {
  .page-title {
    justify-content: flex-start;
    /* don't push the title down -- keep icon and title inline */
    padding-left: 0;
    width: 100%;
    font-size: 1.4rem;
    text-align: left;
    gap: 0rem;
  }

  .page-title a {
    min-width: 0;
  }

  .page-title .icon {
    width: 32px;
    height: auto;
    max-height: 32px;
    margin-right: 0;
  }
}
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
