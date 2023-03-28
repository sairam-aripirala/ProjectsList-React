import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateTabId(tabId)
  }
  const activeTabClassName = isActiveTabId ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
