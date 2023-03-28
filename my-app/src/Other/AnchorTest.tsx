import '../App.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

function AnchorTest() {
  
  return (
    <div className="AnchorTest">
        <h3>Anchor Examples-(Basic) </h3>
        <div style={{width : 200, margin:" 0 auto ", textAlign:"left"}}>
            <Anchor>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-static" title="static demo" />
                <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank"/>
                <Link href="#API" title="API">
                    <Link  href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        </div>
        <h3>Anchor Examples-(Static Anchor) </h3>
        <div style={{width : 200, margin:" 0 auto ", textAlign:"left"}}>
            <Anchor affix={false}>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-static" title="Static demo" />
                <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        </div>
    </div>
    
  );
}

export default AnchorTest;