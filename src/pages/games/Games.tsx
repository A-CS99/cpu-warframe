import { useState, useEffect } from 'react'
import {
	Divider,
	Typography,
	Space,
	Modal,
	Form,
	Button,
	Upload
} from '@douyinfe/semi-ui'
import { IconUpload, IconFile } from '@douyinfe/semi-icons'
import { CodeComputer } from '@icon-park/react'
import TabBar from '../../components/TabBar.tsx'
import GameCard from '../../components/GameCard.tsx'
import { serverUrl } from '../../data/constants.tsx'
import { GameInfo, ProjectInfo, getProjectsDTO } from '../../data/types'
import exampleGames from '../../data/exampleGames.json'
import axios from 'axios'
import { Window } from '../../components/Window.tsx'
import { Axios } from '../../tool/tool.tsx'

const Games = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [games, setGames] = useState<ProjectInfo[]>()
	const [gameSelected, setGameSelected] = useState<GameInfo>()
	const { Title } = Typography

	const handleCardClick = (game: GameInfo) => {
		console.log(game)
		setGameSelected(game)
		Modal.info({
			title: game.name,
			height: 'max-content',
			header: (
				<Space spacing={20} style={{ margin: '20px 0' }}>
					<CodeComputer
						theme='two-tone'
						size='28'
						fill={['#9b9b9b', '#c5c5c5']}
					/>
					<Title heading={6}>{game.name}</Title>
				</Space>
			),
			content: (
				<Form method='post' encType='multipart/form-data'>
					<Form.Label>
						{game.desc.split('\n').map((item, index) => (
							<p key={index} style={{ fontSize: '16px', lineHeight: '20px' }}>
								{item}
							</p>
						))}
					</Form.Label>
					<Form.Upload
						action='https://api.semi.design/upload'
						field='file'
						name='file'
						noLabel={true}
						accept='.c'>
						<Button icon={<IconUpload />} theme='light'>
							点击上传
						</Button>
					</Form.Upload>
				</Form>
			),
			footer: '请上传.c格式文件，且以utf8编码'
		})
	}

	useEffect(() => {
		setGames(exampleGames)
		Axios.get<getProjectsDTO>('/getProjects')
			.then(res => {
				setGames(res.data.data)
				setIsLoaded(true)
			})
			.then(() => {
				setIsLoaded(true)
			})
	}, [])

	return (
		<div className='games'>
			<TabBar />
			<Window align='start'>
				<div
					hidden={!isLoaded}
					className='games-grid'
					style={{ margin: '20px 50px' }}>
					<Space
						vertical={true}
						align='start'
						spacing={20}
						style={{ width: '100%' }}>
						{games?.map(item => (
							<Space
								key={item.typename}
								vertical={true}
								align='start'
								spacing={2}
								style={{ width: '100%' }}>
								<Title heading={1}>{item.typename}</Title>
								<Divider />
								<Space spacing={30} wrap={true}>
									{item.games.map(game => (
										<GameCard
											key={game.id}
											game={game}
											onClick={() => handleCardClick(game)}
										/>
									))}
								</Space>
							</Space>
						))}
					</Space>
				</div>
			</Window>
		</div>
	)
}

export default Games
