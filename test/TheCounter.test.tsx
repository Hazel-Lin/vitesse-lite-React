import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import TheCounter from '~/components/TheCounter'

describe('Counter', () => {
  afterEach(cleanup)

  it('should render', () => {
    const { getByText } = render(<TheCounter initial={10}/>)
    expect(getByText('10')).toBeDefined()
  })

  it('should be interactive', () => {
    const { getByText } = render(<TheCounter initial={0}/>)
    expect(getByText('0')).toBeDefined()

    fireEvent.click(getByText('+'))

    expect(getByText('1')).toBeDefined()

    fireEvent.click(getByText('-'))
    expect(getByText('0')).toBeDefined()
  })
})
