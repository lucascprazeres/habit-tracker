import styled from 'styled-components'

export const SummaryTableContainer = styled.div`
  width: 100%;
  display: flex;
`

export const SummaryTableHeader = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: row;
`

export const WeekDay = styled.div`
  color: ${(props) => props.theme['zinc-400']};
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SummaryTableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  gap: 0.75rem;
`
