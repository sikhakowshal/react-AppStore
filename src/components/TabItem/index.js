import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveTabId, activeTabId} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const isTabSelected = tabId === activeTabId ? 'selected-tab' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${isTabSelected}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
