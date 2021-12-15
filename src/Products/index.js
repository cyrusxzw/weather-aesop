import React from "react";
import Header from "../Header";
import { Tabs } from "antd";
import "./index.css";

const { TabPane } = Tabs;

const Products = () => {
  return (
    <div className="product-wrapper">
      <Header />
      <div className="product-main">
        <h3>Recommended for you</h3>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Products" key="1">
            <div className="product-tab-content">
              <div className="product-panel-1">
                <img src="/prod.png" alt="" />
                <div>
                  <h5>Moroccan Neroli Shaving Serum</h5>
                  <p>$25.00</p>
                </div>
              </div>
              <div className="top-tip">
                <div className="prod-top-img">
                  <img src="/tip.png" alt="" />
                  <h4>Top tip</h4>
                </div>
                <p>Keep in the fridge on a summers day.</p>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Wishlist" key="2">
            <div className="product-panel-1">
              <img src="/prod.png" alt="" />
              <div>
                <h5>Moroccan Neroli Shaving Serum</h5>
                <p>$25.00</p>
              </div>
            </div>
            <div className="product-panel-1">
              <img src="/prod.png" alt="" />
              <div>
                <h5>Moroccan Neroli Shaving Serum</h5>
                <p>$25.00</p>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
