// @flow

import type { Milestone, MilestoneMap, TrackId } from '../constants'
import { eligibleTitles, milestoneToPoints, milestones, trackIds } from '../constants'

import KeyboardListener from '../components/KeyboardListener'
import LevelThermometer from '../components/LevelThermometer'
import NightingaleChart from '../components/NightingaleChart'
import PointSummaries from '../components/PointSummaries'
import React from 'react'
import TitleSelector from '../components/TitleSelector'
import Track from '../components/Track'
import TrackSelector from '../components/TrackSelector'
import Wordmark from '../components/Wordmark'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId,
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[16]) result.name = decodeURI(hashValues[16])
  if (hashValues[17]) result.title = decodeURI(hashValues[17])
  return result
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch(value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: 'Enter Your Name Here',
    title: '',
    milestoneByTrack: {
      'USER_RESEARCH': 0,
      'PERSONAS': 0,
      'USER_JOURNEYS': 0,
      'SITE_VISITS': 0,
      'USER_INTERVIEWS': 0,
      'SHARE_FINDINGS': 0,
      'ANALYTICS': 0,
      'EVALUATE_RESEARCH': 0,
      'USABILITY': 0,
      'PREDICT': 0,
      'TEST_PLANNING': 0,
      'SHARE_RESULTS': 0,
      'PRIORITISE': 0,
      'MAPPING_IA': 0,
      'DOMAIN_MAPPING': 0,
      'IA_PATTERNS': 0,
      'VOCABULARY': 0,
      'IA_PLANNING': 0,
      'FLOWS': 0,
      'PATTERNS': 0,
      'HCI': 0,
      'MOTION': 0,
      'IMPLEMENTATION': 0,
      'DOCUMENTATION': 0,
      'FUNDAMENTALS': 0,
      'PRODUCTION': 0,
      'ILLUSTRATION': 0,
      'DESIGN_LANGUAGE': 0,
      'WRITE': 0,
      'GUIDE': 0,
      'STYLE_GUIDE': 0,
      'INTEGRATE': 0,
      'FIDELITY': 0,
      'FAST_ITERATION': 0,
      'BREADTH': 0,
      'PROTOTYPE': 0,
      'SCHEDULING': 0,
      'STAKEHOLDER_MANAGEMENT': 0,
      'CRITIQUE': 0,
      'PROFESSIONAL_DEVELOPMENT': 0,
      'BOND': 0,
      'CULTURE': 0,
      'ADVOCATE': 0,
      'EVANGELISE': 0
    },
    focusedTrackId: 'USER_RESEARCH'
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    name: 'Nicola Horlor',
    title: 'Staff Engineer',
    milestoneByTrack: {
      'USER_RESEARCH': 0,
      'PERSONAS': 0,
      'USER_JOURNEYS': 0,
      'SITE_VISITS': 0,
      'USER_INTERVIEWS': 0,
      'SHARE_FINDINGS': 0,
      'ANALYTICS': 0,
      'EVALUATE_RESEARCH': 0,
      'USABILITY': 0,
      'PREDICT': 0,
      'TEST_PLANNING': 0,
      'SHARE_RESULTS': 0,
      'PRIORITISE': 0,
      'MAPPING_IA': 0,
      'DOMAIN_MAPPING': 0,
      'IA_PATTERNS': 0,
      'VOCABULARY': 0,
      'IA_PLANNING': 0,
      'FLOWS': 0,
      'PATTERNS': 0,
      'HCI': 0,
      'MOTION': 0,
      'IMPLEMENTATION': 0,
      'DOCUMENTATION': 0,
      'FUNDAMENTALS': 0,
      'PRODUCTION': 0,
      'ILLUSTRATION': 0,
      'DESIGN_LANGUAGE': 0,
      'WRITE': 0,
      'GUIDE': 0,
      'STYLE_GUIDE': 0,
      'INTEGRATE': 0,
      'FIDELITY': 0,
      'FAST_ITERATION': 0,
      'BREADTH': 0,
      'PROTOTYPE': 0,
      'SCHEDULING': 0,
      'STAKEHOLDER_MANAGEMENT': 0,
      'CRITIQUE': 0,
      'PROFESSIONAL_DEVELOPMENT': 0,
      'BOND': 0,
      'CULTURE': 0,
      'ADVOCATE': 0,
      'EVANGELISE': 0
    },
    focusedTrackId: 'USER_RESEARCH'
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title))
  return values.join(',')
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const state = hashToState(window.location.hash)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
    }
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <div style={{margin: '19px 0 24px', width: '100%'}}>
          <a href="https://vendhq.com/" target="_blank">
            <Wordmark /> Product Designer
          </a>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <form>
              <input
                  type="text"
                  className="name-input"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Name"
                  />
            </form>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
          </div>
          <div style={{flex: 1}}>
            <Track
                milestoneByTrack={this.state.milestoneByTrack}
                trackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            <a href="#" onClick={() => this.setState(emptyState())}>Reset</a>
          </div>
          <div style={{flex: 5}}>
            Forked from <a href="https://medium.engineering" target="_blank">Medium Eng</a>.
            Learn about the <a href="https://medium.com/s/engineering-growth-framework" target="_blank">growth framework</a>.
            Get the <a href="https://github.com/Medium/snowflake" target="_blank">source code</a>.
            Read the <a href="https://medium.com/p/85e078bc15b7" target="_blank">terms of service</a>.
          </div>
        </div>
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    const titles = eligibleTitles(milestoneByTrack)
    const title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }
}

export default SnowflakeApp
