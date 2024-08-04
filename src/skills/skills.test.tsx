import { fireEvent, render, screen } from '@testing-library/react'
import SK from './skills'

describe.only('skills', () => {
  const randomSkills = ['javascript', 'react', 'node', 'express']

  test('skill container rendered', () => {
    render(<SK title="the title" />)
    const skillContainer = screen.getByTitle('skills-container')
    expect(skillContainer).toBeInTheDocument()
  })
  test('skill container has a title', () => {
    render(<SK title="the title" />)
    const titleElement = screen.getByRole('heading', { level: 1 })
    expect(titleElement).not.toHaveTextContent('no title')
  })
  test('skills not available', () => {
    render(<SK title="the title" />)
    const emptyState = screen.getByText('there is no skill')
    expect(emptyState).toBeInTheDocument()
  })
  test('skills are availble', async () => {
    render(<SK title="the title" skills={randomSkills} loggedIn />)
    const startLearningButton = await screen.findByText(/wellcome back/i, {
      exact: false,
    })
    fireEvent.click(startLearningButton)

    const skillsElements = await screen.findAllByRole(
      'listitem',
      {},
      {
        timeout: 4001,
      },
    )
    expect(skillsElements).toHaveLength(randomSkills.length)
  })
  test('user logged in', () => {
    render(<SK title="the title" skills={randomSkills} loggedIn={true} />)
    const wellcomeElement = screen.queryByText(/wellcome/i)
    expect(wellcomeElement).toBeInTheDocument()
  })
  test('user not logged in', () => {
    render(<SK loggedIn={false} />)
    const wellcomeElement = screen.queryByText('wellcome back', {
      exact: false,
    })
    expect(wellcomeElement).not.toBeInTheDocument()
  })
})
